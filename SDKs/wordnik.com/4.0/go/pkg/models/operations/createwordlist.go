package operations

type CreateWordListHeaders struct {
	AuthToken string `header:"style=simple,explode=false,name=auth_token"`
}

type CreateWordListRequest struct {
	Headers CreateWordListHeaders
	Request *interface{} `request:"mediaType=application/json"`
}

type CreateWordListResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
