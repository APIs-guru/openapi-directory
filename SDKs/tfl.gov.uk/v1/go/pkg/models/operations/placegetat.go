package operations

type PlaceGetAtPathParams struct {
	Lat  string   `pathParam:"style=simple,explode=false,name=Lat"`
	Lon  string   `pathParam:"style=simple,explode=false,name=Lon"`
	Type []string `pathParam:"style=simple,explode=false,name=type"`
}

type PlaceGetAtQueryParams struct {
	Lat         string  `queryParam:"style=form,explode=true,name=lat"`
	LocationLat float64 `queryParam:"style=form,explode=true,name=location.lat"`
	LocationLon float64 `queryParam:"style=form,explode=true,name=location.lon"`
	Lon         string  `queryParam:"style=form,explode=true,name=lon"`
}

type PlaceGetAtRequest struct {
	PathParams  PlaceGetAtPathParams
	QueryParams PlaceGetAtQueryParams
}

type PlaceGetAtResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
