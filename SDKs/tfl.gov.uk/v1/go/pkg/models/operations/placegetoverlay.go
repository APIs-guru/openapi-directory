package operations

type PlaceGetOverlayPathParams struct {
	Lat    string   `pathParam:"style=simple,explode=false,name=Lat"`
	Lon    string   `pathParam:"style=simple,explode=false,name=Lon"`
	Height int32    `pathParam:"style=simple,explode=false,name=height"`
	Type   []string `pathParam:"style=simple,explode=false,name=type"`
	Width  int32    `pathParam:"style=simple,explode=false,name=width"`
	Z      int32    `pathParam:"style=simple,explode=false,name=z"`
}

type PlaceGetOverlayQueryParams struct {
	Lat         string  `queryParam:"style=form,explode=true,name=lat"`
	LocationLat float64 `queryParam:"style=form,explode=true,name=location.lat"`
	LocationLon float64 `queryParam:"style=form,explode=true,name=location.lon"`
	Lon         string  `queryParam:"style=form,explode=true,name=lon"`
}

type PlaceGetOverlayRequest struct {
	PathParams  PlaceGetOverlayPathParams
	QueryParams PlaceGetOverlayQueryParams
}

type PlaceGetOverlayResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
