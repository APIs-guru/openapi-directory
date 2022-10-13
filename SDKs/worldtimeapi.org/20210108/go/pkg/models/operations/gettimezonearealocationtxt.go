package operations

type GetTimezoneAreaLocationTxtPathParams struct {
	Area     string `pathParam:"style=simple,explode=false,name=area"`
	Location string `pathParam:"style=simple,explode=false,name=location"`
}

type GetTimezoneAreaLocationTxtRequest struct {
	PathParams GetTimezoneAreaLocationTxtPathParams
}

type GetTimezoneAreaLocationTxtResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
