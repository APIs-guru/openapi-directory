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

// GetMapVersionNumberCopyrightsCaptionFormat - Captions
// This API returns copyright captions for the map service.
func (s *SDK) GetMapVersionNumberCopyrightsCaptionFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsCaptionFormatRequest) (*operations.GetMapVersionNumberCopyrightsCaptionFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/caption.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsCaptionFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsFormat - Copyrights whole world
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for the whole world.
func (s *SDK) GetMapVersionNumberCopyrightsFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsFormatRequest) (*operations.GetMapVersionNumberCopyrightsFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat - Copyrights bounding box
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for a specific bounding box.
func (s *SDK) GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest) (*operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/{minLon}/{minLat}/{maxLon}/{maxLat}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberCopyrightsZoomXYFormat - Copyrights tile
// The Copyrights API returns copyright information for
// the Maps API Raster Tile Service in JSON, JSONP, or XML format.
// This call returns copyright information for the a specific map tile.
func (s *SDK) GetMapVersionNumberCopyrightsZoomXYFormat(ctx context.Context, request operations.GetMapVersionNumberCopyrightsZoomXYFormatRequest) (*operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/copyrights/{zoom}/{X}/{Y}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberCopyrightsZoomXYFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 304:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberStaticimage - Static Image
// The Static Image service renders a rectangular raster image
// in the style, size, and zoom level specified. The image can be requested
// using either a center point plus width and height or a bounding box.
func (s *SDK) GetMapVersionNumberStaticimage(ctx context.Context, request operations.GetMapVersionNumberStaticimageRequest) (*operations.GetMapVersionNumberStaticimageResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/staticimage", request.PathParams)

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

	res := &operations.GetMapVersionNumberStaticimageResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMapVersionNumberTileLayerStyleZoomXYFormat - Tile
// The Maps API Raster Service delivers raster tiles, which are representations of square sections of map data.
func (s *SDK) GetMapVersionNumberTileLayerStyleZoomXYFormat(ctx context.Context, request operations.GetMapVersionNumberTileLayerStyleZoomXYFormatRequest) (*operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.{format}", request.PathParams)

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

	res := &operations.GetMapVersionNumberTileLayerStyleZoomXYFormatResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 302:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 410:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMapVersionNumberTileLayerStyleZoomXYPbf - Tile
// The Maps API Vector Service delivers vector tiles, which are representations of square sections of map data.
func (s *SDK) GetMapVersionNumberTileLayerStyleZoomXYPbf(ctx context.Context, request operations.GetMapVersionNumberTileLayerStyleZoomXYPbfRequest) (*operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/tile/{layer}/{style}/{zoom}/{X}/{Y}.pbf", request.PathParams)

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

	res := &operations.GetMapVersionNumberTileLayerStyleZoomXYPbfResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 500:
	case httpRes.StatusCode == 503:
	}

	return res, nil
}

// GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXML - WMTS
// The WMTS GetCapabilities call implements version 1.0.0 of
// the <a href="http://www.opengeospatial.org/standards/wmts">Web Map Tile Service</a>
// (WMTS) standard. It returns metadata that allows compatible calling systems to construct
// calls to TomTom's raster map tile service. See the
// <a href="/maps-api/maps-api-documentation-raster/wmts">documentation</a>
// for more information on WMTS.
func (s *SDK) GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXML(ctx context.Context, request operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLRequest) (*operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wmts/{key}/{wmtsVersion}/WMTSCapabilities.xml", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetMapVersionNumberWmtsKeyWmtsVersionWmtsCapabilitiesXMLResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 400:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetCapabilities - GetCapabilities
// The GetCapabilities call is part of TomTom's implementation of version 1.1.1
// the Web Map Service (WMS). It provides descriptions of the other calls
// that are available in the implementation.
func (s *SDK) GetCapabilities(ctx context.Context, request operations.GetCapabilitiesRequest) (*operations.GetCapabilitiesResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wms//", request.PathParams)

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

	res := &operations.GetCapabilitiesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}

// GetMap - GetMap
// The GetMap call implements the Web Map Service 1.1.1 standard
// to access TomTom raster map tiles. This service is described
// in the response to the GetCapabilities API call.
func (s *SDK) GetMap(ctx context.Context, request operations.GetMapRequest) (*operations.GetMapResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/map/{versionNumber}/wms/", request.PathParams)

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

	res := &operations.GetMapResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 202:
	case httpRes.StatusCode == 401:
	case httpRes.StatusCode == 500:
	}

	return res, nil
}
