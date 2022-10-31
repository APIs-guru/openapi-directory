package operations

type GetAPITokenStatusHeaders struct {
	APIKey *string `header:"style=simple,explode=false,name=api_key"`
}

type GetAPITokenStatusRequest struct {
	Headers GetAPITokenStatusHeaders
}

type GetAPITokenStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
