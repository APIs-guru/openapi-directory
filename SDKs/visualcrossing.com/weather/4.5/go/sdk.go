package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

var ServerList = []string{
	"https://weather.visualcrossing.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

// SDK Documentation: https://www.visualcrossing.com/weather-api-documentation - https://www.visualcrossing.com/weather-api-documentation
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

// GetVisualCrossingWebServicesRestServicesWeatherdataForecast - Weather Forecast API
// Provides access to weather forecast information. The forecast is available for up to 15 days at the hourly, 12 hour and daily summary level.
func (s *SDK) GetVisualCrossingWebServicesRestServicesWeatherdataForecast(ctx context.Context, request operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastRequest) (*operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse, error) {
	baseURL := operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/VisualCrossingWebServices/rest/services/weatherdata/forecast"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVisualCrossingWebServicesRestServicesWeatherdataForecastResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// GetVisualCrossingWebServicesRestServicesWeatherdataHistory - Retrieves hourly or daily historical weather records.
// The weather history data is suitable for retrieving hourly or daily historical weather records.
func (s *SDK) GetVisualCrossingWebServicesRestServicesWeatherdataHistory(ctx context.Context, request operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryRequest) (*operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse, error) {
	baseURL := operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryServerList[0]
	if request.ServerURL != nil {
		baseURL = *request.ServerURL
	}

	url := strings.TrimSuffix(baseURL, "/") + "/VisualCrossingWebServices/rest/services/weatherdata/history"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVisualCrossingWebServicesRestServicesWeatherdataHistoryResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
