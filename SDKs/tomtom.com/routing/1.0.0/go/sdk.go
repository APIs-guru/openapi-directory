package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
)

var Servers = []string{
	"https://api.tomtom.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	defaultClient  HTTPClient
	securityClient HTTPClient
	serverURL      string
}

type SDKOption func(*SDK)

func WithServerURL(serverURL string, params map[string]string) SDKOption {
	return func(sdk *SDK) {
		if params != nil {
			serverURL = utils.ReplaceParameters(serverURL, params)
		}

		sdk.serverURL = serverURL
	}
}

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk.securityClient = utils.CreateSecurityClient(security)
	}
}

func New(opts ...SDKOption) *SDK {
	sdk := &SDK{
		defaultClient:  http.DefaultClient,
		securityClient: http.DefaultClient,
	}
	for _, opt := range opts {
		opt(sdk)
	}
	if sdk.serverURL == "" {
		sdk.serverURL = Servers[0]
	}

	return sdk
}

func (s *SDK) GetRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx context.Context, request operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) (*operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

func (s *SDK) GetRoutingVersionNumberCalculateRouteLocationsContentType(ctx context.Context, request operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) (*operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

func (s *SDK) PostRoutingVersionNumberCalculateReachableRangeOriginContentType(ctx context.Context, request operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest) (*operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateReachableRange/{origin}/{contentType}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}

func (s *SDK) PostRoutingVersionNumberCalculateRouteLocationsContentType(ctx context.Context, request operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeRequest) (*operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse, error) {
	baseURL := s.serverURL
	url := utils.GenerateURL(ctx, baseURL, "/routing/{versionNumber}/calculateRoute/{locations}/{contentType}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s.securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostRoutingVersionNumberCalculateRouteLocationsContentTypeResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 404:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 408:
	case httpRes.StatusCode == 414:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 502:
	case httpRes.StatusCode == 503:
	case httpRes.StatusCode == 504:
	case httpRes.StatusCode == 596:
	}

	return res, nil
}
