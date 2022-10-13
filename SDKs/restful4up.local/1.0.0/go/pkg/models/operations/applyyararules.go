package operations

type ApplyYaraRulesRequest struct {
	Request interface{} `request:"mediaType=multipart/form-data"`
}

type ApplyYaraRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
