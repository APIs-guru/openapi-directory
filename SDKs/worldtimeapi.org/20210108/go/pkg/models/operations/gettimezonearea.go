package operations

type GetTimezoneAreaPathParams struct {
	Area string `pathParam:"style=simple,explode=false,name=area"`
}

type GetTimezoneAreaRequest struct {
	PathParams GetTimezoneAreaPathParams
}

type GetTimezoneAreaResponse struct {
	ContentType       string
	ErrorJSONResponse *interface{}
	ListJSONResponse  []string
	StatusCode        int64
}
