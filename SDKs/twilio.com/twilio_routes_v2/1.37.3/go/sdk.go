package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

var ServerList = []string{
	"https://routes.twilio.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient

	_serverURL  string
	_language   string
	_sdkVersion string
	_genVersion string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk._serverURL = serverURL
	}
}

func WithClient(client HTTPClient) SDKOption {
	return func(sdk *SDK) {
		sdk._defaultClient = client
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		_language:   "go",
		_sdkVersion: "",
		_genVersion: "internal",
	}
	for _, opt := range opts {
		opt(sdk)
	}

	if sdk._defaultClient == nil {
		sdk._defaultClient = http.DefaultClient
	}
	if sdk._securityClient == nil {

		sdk._securityClient = sdk._defaultClient

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// FetchPhoneNumber - Fetch the Inbound Processing Region assigned to a phone number.
func (s *SDK) FetchPhoneNumber(ctx context.Context, request operations.FetchPhoneNumberRequest) (*operations.FetchPhoneNumberResponse, error) {
	baseURL := operations.FetchPhoneNumberServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/PhoneNumbers/{PhoneNumber}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
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

	res := &operations.FetchPhoneNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2PhoneNumber
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2PhoneNumber = out
		}
	}

	return res, nil
}

func (s *SDK) FetchSipDomain(ctx context.Context, request operations.FetchSipDomainRequest) (*operations.FetchSipDomainResponse, error) {
	baseURL := operations.FetchSipDomainServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/SipDomains/{SipDomain}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
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

	res := &operations.FetchSipDomainResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2SipDomain
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2SipDomain = out
		}
	}

	return res, nil
}

// FetchTrunks - Fetch the Inbound Processing Region assigned to a SIP Trunk.
func (s *SDK) FetchTrunks(ctx context.Context, request operations.FetchTrunksRequest) (*operations.FetchTrunksResponse, error) {
	baseURL := operations.FetchTrunksServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/Trunks/{SipTrunkDomain}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
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

	res := &operations.FetchTrunksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2Trunks
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2Trunks = out
		}
	}

	return res, nil
}

// UpdatePhoneNumber - Assign an Inbound Processing Region to a phone number.
func (s *SDK) UpdatePhoneNumber(ctx context.Context, request operations.UpdatePhoneNumberRequest) (*operations.UpdatePhoneNumberResponse, error) {
	baseURL := operations.UpdatePhoneNumberServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/PhoneNumbers/{PhoneNumber}", request.PathParams)

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

	res := &operations.UpdatePhoneNumberResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2PhoneNumber
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2PhoneNumber = out
		}
	}

	return res, nil
}

func (s *SDK) UpdateSipDomain(ctx context.Context, request operations.UpdateSipDomainRequest) (*operations.UpdateSipDomainResponse, error) {
	baseURL := operations.UpdateSipDomainServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/SipDomains/{SipDomain}", request.PathParams)

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

	res := &operations.UpdateSipDomainResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2SipDomain
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2SipDomain = out
		}
	}

	return res, nil
}

// UpdateTrunks - Assign an Inbound Processing Region to a SIP Trunk
func (s *SDK) UpdateTrunks(ctx context.Context, request operations.UpdateTrunksRequest) (*operations.UpdateTrunksResponse, error) {
	baseURL := operations.UpdateTrunksServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := utils.GenerateURL(ctx, baseURL, "/v2/Trunks/{SipTrunkDomain}", request.PathParams)

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

	res := &operations.UpdateTrunksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.RoutesV2Trunks
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RoutesV2Trunks = out
		}
	}

	return res, nil
}
