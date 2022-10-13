package operations

type PlaceGetStreetsByPostCodePathParams struct {
	Postcode string `pathParam:"style=simple,explode=false,name=Postcode"`
}

type PlaceGetStreetsByPostCodeQueryParams struct {
	Postcode              string  `queryParam:"style=form,explode=true,name=postcode"`
	PostcodeInputPostcode *string `queryParam:"style=form,explode=true,name=postcodeInput.postcode"`
}

type PlaceGetStreetsByPostCodeRequest struct {
	PathParams  PlaceGetStreetsByPostCodePathParams
	QueryParams PlaceGetStreetsByPostCodeQueryParams
}

type PlaceGetStreetsByPostCodeResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
