package operations

type GetTimezoneAreaTxtPathParams struct {
	Area string `pathParam:"style=simple,explode=false,name=area"`
}

type GetTimezoneAreaTxtRequest struct {
	PathParams GetTimezoneAreaTxtPathParams
}

type GetTimezoneAreaTxtResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
