package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
)

type Tenant struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTenant(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Tenant {
	return &Tenant{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GetTenantTenantname - Get a Tenant
// This endpoint allows you to get the data of a given PhantAuth tenant. To use the PhantAuth services, you don't need this endpoint.
// It is, therefore, mainly used for debug/diagnostic purposes in tenant customization.
//
// Tenantname is the name of the full DNS domain of the tenant you get.
// In the case of an official and shared tenant (phantauth.net and phantauth.cf DNS domains), the DNS domain can be omitted (e.g. *default* or *faker*).
func (s *Tenant) GetTenantTenantname(ctx context.Context, request operations.GetTenantTenantnameRequest) (*operations.GetTenantTenantnameResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/tenant/{tenantname}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetTenantTenantnameResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.GetTenantTenantname200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GetTenantTenantname200ApplicationJSONObject = out
		}
	}

	return res, nil
}
