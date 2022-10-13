package operations

type DeleteWordsFromWordListPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type DeleteWordsFromWordListHeaders struct {
	AuthToken string `header:"name=auth_token"`
}

type DeleteWordsFromWordListRequest struct {
	PathParams DeleteWordsFromWordListPathParams
	Headers    DeleteWordsFromWordListHeaders
	Request    []interface{} `request:"mediaType=application/json"`
}

type DeleteWordsFromWordListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
