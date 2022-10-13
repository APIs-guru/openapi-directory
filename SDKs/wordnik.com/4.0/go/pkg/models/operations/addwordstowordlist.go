package operations

type AddWordsToWordListPathParams struct {
	Permalink string `pathParam:"style=simple,explode=false,name=permalink"`
}

type AddWordsToWordListHeaders struct {
	AuthToken string `header:"name=auth_token"`
}

type AddWordsToWordListRequest struct {
	PathParams AddWordsToWordListPathParams
	Headers    AddWordsToWordListHeaders
	Request    []interface{} `request:"mediaType=application/json"`
}

type AddWordsToWordListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
