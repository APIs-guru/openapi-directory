package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type ThreeForBackEndOptional struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewThreeForBackEndOptional(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ThreeForBackEndOptional {
	return &ThreeForBackEndOptional{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RootV1ScoringsConsolidated - /v1/Scorings/consolidated
// /v1/Scorings/consolidated
func (s *ThreeForBackEndOptional) RootV1ScoringsConsolidated(ctx context.Context, request operations.RootV1ScoringsConsolidatedRequest) (*operations.RootV1ScoringsConsolidatedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Scorings/consolidated"

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

	res := &operations.RootV1ScoringsConsolidatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// RootV1ScoringsConsolidatedDaily - /v1/Scorings/consolidated/daily
// /v1/Scorings/consolidated/daily
func (s *ThreeForBackEndOptional) RootV1ScoringsConsolidatedDaily(ctx context.Context, request operations.RootV1ScoringsConsolidatedDailyRequest) (*operations.RootV1ScoringsConsolidatedDailyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Scorings/consolidated/daily"

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

	res := &operations.RootV1ScoringsConsolidatedDailyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.RootV1ScoringsConsolidatedDaily200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.RootV1ScoringsConsolidatedDaily200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// RootV1StatisticsConsolidated - /v1/Statistics/consolidated
// /v1/Statistics/consolidated
func (s *ThreeForBackEndOptional) RootV1StatisticsConsolidated(ctx context.Context, request operations.RootV1StatisticsConsolidatedRequest) (*operations.RootV1StatisticsConsolidatedResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Statistics/consolidated"

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

	res := &operations.RootV1StatisticsConsolidatedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header
	}

	return res, nil
}

// RootV1StatisticsConsolidatedDaily - /v1/Statistics/consolidated/daily
// /v1/Statistics/consolidated/daily
func (s *ThreeForBackEndOptional) RootV1StatisticsConsolidatedDaily(ctx context.Context, request operations.RootV1StatisticsConsolidatedDailyRequest) (*operations.RootV1StatisticsConsolidatedDailyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Statistics/consolidated/daily"

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

	res := &operations.RootV1StatisticsConsolidatedDailyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header
	}

	return res, nil
}
