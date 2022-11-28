package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type ConsolidatedStatistics struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewConsolidatedStatistics(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ConsolidatedStatistics {
	return &ConsolidatedStatistics{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// RootV1StatisticsConsolidated - /v1/Statistics/consolidated
// /v1/Statistics/consolidated
func (s *ConsolidatedStatistics) RootV1StatisticsConsolidated(ctx context.Context, request operations.RootV1StatisticsConsolidatedRequest) (*operations.RootV1StatisticsConsolidatedResponse, error) {
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
func (s *ConsolidatedStatistics) RootV1StatisticsConsolidatedDaily(ctx context.Context, request operations.RootV1StatisticsConsolidatedDailyRequest) (*operations.RootV1StatisticsConsolidatedDailyResponse, error) {
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
