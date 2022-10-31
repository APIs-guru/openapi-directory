package operations

type DeleteWordListPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type DeleteWordListHeaders struct {
	AuthToken string `header:"style=simple,explode=false,name=auth_token"`
}

type DeleteWordListRequest struct {
	PathParams DeleteWordListPathParams
	Headers    DeleteWordListHeaders
}

type DeleteWordListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
