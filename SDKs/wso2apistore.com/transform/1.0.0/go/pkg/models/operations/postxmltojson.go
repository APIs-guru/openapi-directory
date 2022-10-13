package operations

type PostXmltojsonRequest struct {
	Request []byte `request:"mediaType=text/xml"`
}

type PostXmltojsonResponse struct {
	ContentType string
	StatusCode  int64
}
