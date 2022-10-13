package operations

type UpdateWordListPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type UpdateWordListHeaders struct {
	AuthToken string `header:"name=auth_token"`
}

type UpdateWordListRequest struct {
	PathParams UpdateWordListPathParams
	Headers    UpdateWordListHeaders
	Request    *interface{} `request:"mediaType=application/json"`
}

type UpdateWordListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
