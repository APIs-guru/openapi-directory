package sdk

import (
	"context"
	"fmt"
	"io"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Microsegmentation struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewMicrosegmentation(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Microsegmentation {
	return &Microsegmentation{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ExportNsxRecommendedRules - Export recommended rules for NSX-V
// Export recommended firewall rules based on the flow data gathered by vRealize Network Insight in NSX-V compatible
// format
func (s *Microsegmentation) ExportNsxRecommendedRules(ctx context.Context, request operations.ExportNsxRecommendedRulesRequest) (*operations.ExportNsxRecommendedRulesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/micro-seg/recommended-rules/nsx"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ExportNsxRecommendedRulesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.ExportNsxRecommendedRules200ApplicationOctetStreamBinaryString = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/octet-stream`):
			out, err := io.ReadAll(httpRes.Body)
			if err != nil {
				return nil, fmt.Errorf("error reading response body: %w", err)
			}

			res.Body = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// ListRecommendedRules - Get logical recommended rules
// Get recommended firewall rules based on the flow data gathered by vRealize Network Insight.
// This API provides service to retrieve recommended rules based on flow traffic that is observed between
// two groups OR for a single group based on all the inbound and outboud traffic for that group.
// In case two groups are provided, both the groups should be of same type.
// Currently supported groups are Application, Tier, NSXSecurityGroup, EC2SecurityGroup.
func (s *Microsegmentation) ListRecommendedRules(ctx context.Context, request operations.ListRecommendedRulesRequest) (*operations.ListRecommendedRulesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/micro-seg/recommended-rules"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListRecommendedRulesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RecommendedRules
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RecommendedRules = out
		}
	case httpRes.StatusCode == 400:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.APIError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.APIError = out
		}
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
