package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type OnDemandPurchasesAndRentals struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewOnDemandPurchasesAndRentals(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *OnDemandPurchasesAndRentals {
	return &OnDemandPurchasesAndRentals{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// CheckIfVodWasPurchased - Check if a user has made a purchase or rental from an On Demand page
func (s *OnDemandPurchasesAndRentals) CheckIfVodWasPurchased(ctx context.Context, request operations.CheckIfVodWasPurchasedRequest) (*operations.CheckIfVodWasPurchasedResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/users/{user_id}/ondemand/purchases", request.PathParams)

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

	res := &operations.CheckIfVodWasPurchasedResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.OnDemandPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnDemandPage = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.LegacyError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LegacyError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.LegacyError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LegacyError = out
		}
	}

	return res, nil
}

// CheckIfVodWasPurchasedAlt1 - Check if a user has made a purchase or rental from an On Demand page
func (s *OnDemandPurchasesAndRentals) CheckIfVodWasPurchasedAlt1(ctx context.Context, request operations.CheckIfVodWasPurchasedAlt1Request) (*operations.CheckIfVodWasPurchasedAlt1Response, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/me/ondemand/purchases/{ondemand_id}", request.PathParams)

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

	res := &operations.CheckIfVodWasPurchasedAlt1Response{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.OnDemandPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnDemandPage = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.LegacyError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LegacyError = out
		}
	case httpRes.StatusCode == 404:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.LegacyError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LegacyError = out
		}
	}

	return res, nil
}

// GetVodPurchases - Get all the On Demand purchases and rentals that a user has made
func (s *OnDemandPurchasesAndRentals) GetVodPurchases(ctx context.Context, request operations.GetVodPurchasesRequest) (*operations.GetVodPurchasesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/me/ondemand/purchases"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := utils.ConfigureSecurityClient(s._defaultClient, request.Security)

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetVodPurchasesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out []shared.OnDemandPage
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.OnDemandPages = out
		}
	case httpRes.StatusCode == 403:
		switch {
		case utils.MatchContentType(contentType, `application/vnd.vimeo.ondemand.page+json`):
			var out *shared.LegacyError
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.LegacyError = out
		}
	}

	return res, nil
}
