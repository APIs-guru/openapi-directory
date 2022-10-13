package operations

type GetTimezoneAreaLocationRegionPathParams struct {
	Area     string `pathParam:"style=simple,explode=false,name=area"`
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Region   string `pathParam:"style=simple,explode=false,name=region"`
}

type GetTimezoneAreaLocationRegionRequest struct {
	PathParams GetTimezoneAreaLocationRegionPathParams
}

type GetTimezoneAreaLocationRegionResponse struct {
	ContentType          string
	DateTimeJSONResponse *interface{}
	ErrorJSONResponse    *interface{}
	StatusCode           int64
}
