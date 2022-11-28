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
	"https://api.tomtom.com",
}

type HTTPClient interface {
	Do(req *http.Request) (*http.Response, error)
}

type SDK struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_security       *shared.Security
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
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

func WithSecurity(security shared.Security) SDKOption {
	return func(sdk *SDK) {
		sdk._security = &security
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

		if sdk._security != nil {
			sdk._securityClient = utils.ConfigureSecurityClient(sdk._defaultClient, sdk._security)
		} else {
			sdk._securityClient = sdk._defaultClient
		}

	}

	if sdk._serverURL == "" {
		sdk._serverURL = ServerList[0]
	}

	return sdk
}

// GetSearchVersionNumberAdditionalDataExt - Additional Data
func (s *SDK) GetSearchVersionNumberAdditionalDataExt(ctx context.Context, request operations.GetSearchVersionNumberAdditionalDataExtRequest) (*operations.GetSearchVersionNumberAdditionalDataExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/additionalData.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberAdditionalDataExtResponse{
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

// GetSearchVersionNumberCSCategoryExt - Low Bandwith Category Search
func (s *SDK) GetSearchVersionNumberCSCategoryExt(ctx context.Context, request operations.GetSearchVersionNumberCSCategoryExtRequest) (*operations.GetSearchVersionNumberCSCategoryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/cS/{category}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberCSCategoryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberCategorySearchQueryExt - Category Search
func (s *SDK) GetSearchVersionNumberCategorySearchQueryExt(ctx context.Context, request operations.GetSearchVersionNumberCategorySearchQueryExtRequest) (*operations.GetSearchVersionNumberCategorySearchQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/categorySearch/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberCategorySearchQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberGeocodeQueryExt - Geocode
func (s *SDK) GetSearchVersionNumberGeocodeQueryExt(ctx context.Context, request operations.GetSearchVersionNumberGeocodeQueryExtRequest) (*operations.GetSearchVersionNumberGeocodeQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/geocode/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberGeocodeQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberGeometryFilterExt - Geometry Filter
func (s *SDK) GetSearchVersionNumberGeometryFilterExt(ctx context.Context, request operations.GetSearchVersionNumberGeometryFilterExtRequest) (*operations.GetSearchVersionNumberGeometryFilterExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/geometryFilter.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberGeometryFilterExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberGeometrySearchQueryExt - Geometry Search
func (s *SDK) GetSearchVersionNumberGeometrySearchQueryExt(ctx context.Context, request operations.GetSearchVersionNumberGeometrySearchQueryExtRequest) (*operations.GetSearchVersionNumberGeometrySearchQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberGeometrySearchQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberNearbySearchExt - Nearby Search
func (s *SDK) GetSearchVersionNumberNearbySearchExt(ctx context.Context, request operations.GetSearchVersionNumberNearbySearchExtRequest) (*operations.GetSearchVersionNumberNearbySearchExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/nearbySearch/.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberNearbySearchExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberPoiSearchQueryExt - Points of Interest Search
func (s *SDK) GetSearchVersionNumberPoiSearchQueryExt(ctx context.Context, request operations.GetSearchVersionNumberPoiSearchQueryExtRequest) (*operations.GetSearchVersionNumberPoiSearchQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/poiSearch/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberPoiSearchQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt - Cross Street lookup
func (s *SDK) GetSearchVersionNumberReverseGeocodeCrossStreetPositionExt(ctx context.Context, request operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest) (*operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/reverseGeocode/crossStreet/{position}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberReverseGeocodePositionExt - Reverse Geocode
func (s *SDK) GetSearchVersionNumberReverseGeocodePositionExt(ctx context.Context, request operations.GetSearchVersionNumberReverseGeocodePositionExtRequest) (*operations.GetSearchVersionNumberReverseGeocodePositionExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/reverseGeocode/{position}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberReverseGeocodePositionExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
func (s *SDK) GetSearchVersionNumberRoutedFilterPositionHeadingExt(ctx context.Context, request operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtRequest) (*operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberRoutedFilterPositionHeadingExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt - Routed Search
func (s *SDK) GetSearchVersionNumberRoutedSearchQueryPositionHeadingExt(ctx context.Context, request operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtRequest) (*operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/routedSearch/{query}/{position}/{heading}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberRoutedSearchQueryPositionHeadingExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberSQueryExt - Low bandwith Search
func (s *SDK) GetSearchVersionNumberSQueryExt(ctx context.Context, request operations.GetSearchVersionNumberSQueryExtRequest) (*operations.GetSearchVersionNumberSQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/s/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberSQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberSearchQueryExt - Fuzzy Search
func (s *SDK) GetSearchVersionNumberSearchQueryExt(ctx context.Context, request operations.GetSearchVersionNumberSearchQueryExtRequest) (*operations.GetSearchVersionNumberSearchQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/search/{query}.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberSearchQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// GetSearchVersionNumberStructuredGeocodeExt - Structured Geocode
func (s *SDK) GetSearchVersionNumberStructuredGeocodeExt(ctx context.Context, request operations.GetSearchVersionNumberStructuredGeocodeExtRequest) (*operations.GetSearchVersionNumberStructuredGeocodeExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/structuredGeocode.{ext}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetSearchVersionNumberStructuredGeocodeExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// PostSearchVersionNumberGeometryFilterExt - Geometry Filter
func (s *SDK) PostSearchVersionNumberGeometryFilterExt(ctx context.Context, request operations.PostSearchVersionNumberGeometryFilterExtRequest) (*operations.PostSearchVersionNumberGeometryFilterExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/geometryFilter.{ext}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSearchVersionNumberGeometryFilterExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// PostSearchVersionNumberGeometrySearchQueryExt - Geometry Search
func (s *SDK) PostSearchVersionNumberGeometrySearchQueryExt(ctx context.Context, request operations.PostSearchVersionNumberGeometrySearchQueryExtRequest) (*operations.PostSearchVersionNumberGeometrySearchQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/geometrySearch/{query}.{ext}", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSearchVersionNumberGeometrySearchQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// PostSearchVersionNumberRoutedFilterPositionHeadingExt - Routed Filter
func (s *SDK) PostSearchVersionNumberRoutedFilterPositionHeadingExt(ctx context.Context, request operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtRequest) (*operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/routedFilter/{position}/{heading}.{ext}", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSearchVersionNumberRoutedFilterPositionHeadingExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}

// PostSearchVersionNumberSearchAlongRouteQueryExt - Along Route Search
func (s *SDK) PostSearchVersionNumberSearchAlongRouteQueryExt(ctx context.Context, request operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequest) (*operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/search/{versionNumber}/searchAlongRoute/{query}.{ext}", request.PathParams)

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

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSearchVersionNumberSearchAlongRouteQueryExtResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 405:
	case httpRes.StatusCode == 596:
	case httpRes.StatusCode >= 500 && httpRes.StatusCode < 600:
	}

	return res, nil
}
