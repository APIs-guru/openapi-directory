package operations

type PostXmltojsonRequest struct {
	Request string `request:"mediaType=text/xml"`
}

type PostXmltojsonResponse struct {
	ContentType string
	StatusCode  int64
}
