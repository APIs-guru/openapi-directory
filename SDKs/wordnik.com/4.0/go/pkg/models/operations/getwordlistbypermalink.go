package operations

type GetWordListByPermalinkPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type GetWordListByPermalinkHeaders struct {
	AuthToken string `header:"style=simple,explode=false,name=auth_token"`
}

type GetWordListByPermalinkRequest struct {
	PathParams GetWordListByPermalinkPathParams
	Headers    GetWordListByPermalinkHeaders
}

type GetWordListByPermalinkResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
