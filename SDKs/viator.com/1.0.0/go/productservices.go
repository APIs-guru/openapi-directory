package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type ProductServices struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewProductServices(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ProductServices {
	return &ProductServices{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// AvailableProducts - /available/products
// Find products that are available
//
//	This endpoint returns available products filtered by product code, date range or number of adult travelers
//
//
//	- **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.
func (s *ProductServices) AvailableProducts(ctx context.Context, request operations.AvailableProductsRequest) (*operations.AvailableProductsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/available/products"

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

	res := &operations.AvailableProductsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.AvailableProducts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.AvailableProducts200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// Product - /product
// Get product information
// This service provides all product details required for a product display page, as well as information required for price checks and booking, such as:
// - age bands
// - tour grades
// - language options
// - booking questions
// - hotel pickup flags
//
// **currencyCode (in query):**
// - use this parameter to specify the currency in which product pricing should be displayed
// - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars
// - "multi-currency" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled
// - **Note**: you will be billed in the currency in which the booking was made
//
// **Product photos**
//
// &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;
//
// **Videos**
//
// - Videos are no longer provided via this API
func (s *ProductServices) Product(ctx context.Context, request operations.ProductRequest) (*operations.ProductResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/product"

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

	res := &operations.ProductResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.Product200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.Product200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ProductPhotos - /product/photos
// Get photos of a product submitted by users
func (s *ProductServices) ProductPhotos(ctx context.Context, request operations.ProductPhotosRequest) (*operations.ProductPhotosResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/product/photos"

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

	res := &operations.ProductPhotosResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ProductPhotos200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductPhotos200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// ProductReviews - /product/reviews
// Get user-submitted reviews of a product
//
// **Note**:
// - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive.
// - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product)
// - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product.
// - Only reviews in the language specified in the Accept-Language request header will be returned
//
// **Example:** "Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order":
//
// ```javascript
// https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false
// ```
func (s *ProductServices) ProductReviews(ctx context.Context, request operations.ProductReviewsRequest) (*operations.ProductReviewsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/product/reviews"

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

	res := &operations.ProductReviewsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.ProductReviews200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.ProductReviews200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SearchFreetext - /search/freetext
// Free text search
// - This service provides a **free text search across all products and destinations**
// - The `text` parameter is required
// - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content
func (s *ProductServices) SearchFreetext(ctx context.Context, request operations.SearchFreetextRequest) (*operations.SearchFreetextResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/freetext"

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

	res := &operations.SearchFreetextResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SearchFreetext200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchFreetext200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SearchProducts - /search/products
// Search for products
// This service is used to search for products based on various criteria; such as:
// * the destination (locale) in which it operates
// * its association with a tourist attraction
// * its category and/or subcategory
// * the time period during which it operates
// The fields you include in the request body for this service determine the kind of search that will be performed.
//
// **&lt;u&gt;Note&lt;/u&gt;**:
//
// * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both.
// * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service.
// * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service.
// * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.
//
// **&lt;u&gt;Examples&lt;/u&gt;**:
//
// **Search by destination**:
//
// * E.g., "Top ten highest-rated yoga classes operating in Las Vegas:
// ```javascript
//
//	{
//	    "destId": 684,
//	    "subCatId": 26052,
//	    "sortOrder": "REVIEW_AVG_RATING_D",
//	    "topX": "1-3"
//	}
//
// ```
//
// **Search by attraction-link**:
//
// * E.g., "Products related to Everglades National Park operating 21-26 May 2019 in order of descending price":
// ```javascript
//
//	{
//	    "seoId": 1115,
//	    "sortOrder": "PRICE_FROM_D",
//	    "topX": "1-3"
//	}
//
// ```
//
// **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**:
// - Merchants with a "freesale only" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination.
// - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service.
// ```javascript
//
//	{
//	    "destId": 684,
//	    "startDate": "2020-02-21",
//	    "endDate": "2020-03-21",
//	    "sortOrder": "PRICE_FROM_D",
//	    "topX": "1-3"
//	}
//
// ```
//
// - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking.
func (s *ProductServices) SearchProducts(ctx context.Context, request operations.SearchProductsRequest) (*operations.SearchProductsResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/products"

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

	res := &operations.SearchProductsResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SearchProducts200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchProducts200ApplicationJSONObject = out
		}
	}

	return res, nil
}

// SearchProductsCodes - /search/products/codes
// Search by product code
// - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display
// - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example).
func (s *ProductServices) SearchProductsCodes(ctx context.Context, request operations.SearchProductsCodesRequest) (*operations.SearchProductsCodesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/search/products/codes"

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

	res := &operations.SearchProductsCodesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *operations.SearchProductsCodes200ApplicationJSON
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.SearchProductsCodes200ApplicationJSONObject = out
		}
	}

	return res, nil
}
