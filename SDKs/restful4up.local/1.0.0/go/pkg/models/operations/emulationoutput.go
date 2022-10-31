package operations

type EmulationOutputRequest struct {
	Request interface{} `request:"mediaType=multipart/form-data"`
}

type EmulationOutputResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
