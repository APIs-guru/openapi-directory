package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type Two1UserStatisticsOptional struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTwo1UserStatisticsOptional(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Two1UserStatisticsOptional {
	return &Two1UserStatisticsOptional{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// UserStatisticeDailyValueV1StatisticsIndividualDaily - User statistice - Daily value - v1/Statistics/individual/daily
// User statistice - Daily value - v1/Statistics/individual/daily
func (s *Two1UserStatisticsOptional) UserStatisticeDailyValueV1StatisticsIndividualDaily(ctx context.Context, request operations.UserStatisticeDailyValueV1StatisticsIndividualDailyRequest) (*operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Statistics/individual/daily/"

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

	res := &operations.UserStatisticeDailyValueV1StatisticsIndividualDailyResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserStatisticeDailyValueV1StatisticsIndividualDaily200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// UserStatisticsAccumulatedValueV1StatisticsIndividual - User statistics - Accumulated value - /v1/Statistics/individual
// User statistics - Accumulated value - /v1/Statistics/individual
func (s *Two1UserStatisticsOptional) UserStatisticsAccumulatedValueV1StatisticsIndividual(ctx context.Context, request operations.UserStatisticsAccumulatedValueV1StatisticsIndividualRequest) (*operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/statistics/v1/Statistics/individual/"

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

	res := &operations.UserStatisticsAccumulatedValueV1StatisticsIndividualResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		res.Headers = httpRes.Header

		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.UserStatisticsAccumulatedValueV1StatisticsIndividual200ApplicationJSONObject = out
		}
	}

	return res, nil
}
