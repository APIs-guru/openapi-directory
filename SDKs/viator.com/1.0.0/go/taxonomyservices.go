package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type TaxonomyServices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewTaxonomyServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *TaxonomyServices {
	return &TaxonomyServices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// TaxonomyAttractions - /taxonomy/attractions
// Get attractions
// - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers
// - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service.
func (s *TaxonomyServices) TaxonomyAttractions(ctx context.Context, request operations.TaxonomyAttractionsRequest) (*operations.TaxonomyAttractionsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/taxonomy/attractions"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TaxonomyAttractionsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxonomyAttractions200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxonomyAttractions200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// TaxonomyCategories - /taxonomy/categories
// Get all product categories
// - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service
// - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories
// - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields
func (s *TaxonomyServices) TaxonomyCategories(ctx context.Context, request operations.TaxonomyCategoriesRequest) (*operations.TaxonomyCategoriesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/taxonomy/categories"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TaxonomyCategoriesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxonomyCategories200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxonomyCategories200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// TaxonomyDestinations - /taxonomy/destinations
// Get details of all destinations supported by this API
// - Retrieves all the country taxonomy/city nodes as a flat list
// - Returns a complete list of Viator destinations, including destination names and parent identifiers
// - Used to provide navigation through drill down lists or combo boxes
func (s *TaxonomyServices) TaxonomyDestinations(ctx context.Context, request operations.TaxonomyDestinationsRequest) (*operations.TaxonomyDestinationsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/taxonomy/destinations"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.TaxonomyDestinationsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.TaxonomyDestinations200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.TaxonomyDestinations200ApplicationJSONObject = out
		}
	}

	return res, nil
}
