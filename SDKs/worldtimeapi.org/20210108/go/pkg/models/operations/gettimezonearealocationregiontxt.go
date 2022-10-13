package operations

type GetTimezoneAreaLocationRegionTxtPathParams struct {
	Area     string `pathParam:"style=simple,explode=false,name=area"`
	Location string `pathParam:"style=simple,explode=false,name=location"`
	Region   string `pathParam:"style=simple,explode=false,name=region"`
}

type GetTimezoneAreaLocationRegionTxtRequest struct {
	PathParams GetTimezoneAreaLocationRegionTxtPathParams
}

type GetTimezoneAreaLocationRegionTxtResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
