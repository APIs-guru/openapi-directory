package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Uninstallation struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewUninstallation(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Uninstallation {
	return &Uninstallation{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteInstallation - アプリストアアプリのアンインストール
// このAPIは OAuth のアクセストークンに紐付くアプリケーションをショップから削除します。
// このAPIを利用した場合、ショップオーナーがアンインストールした場合と異なり、アンインストールフックは実行されません。
// 代わりにアンインストールフックで通知される情報は、このAPIのレスポンスに含まれています。
//
// アンインストール時の注意点については、[アプリのアンインストール](https://app.shop-pro.jp/open_api#section/API/アプリのインストール)を参照して下さい。
func (s *Uninstallation) DeleteInstallation(ctx context.Context, request operations.DeleteInstallationRequest) (*operations.DeleteInstallationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/appstore/v1/installation.json"

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteInstallationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.DeleteInstallation200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DeleteInstallation200ApplicationJSONObject = out
		}
	}

	return res, nil
}
