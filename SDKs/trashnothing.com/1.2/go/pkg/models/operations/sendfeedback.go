package operations

type SendFeedbackRequestBody struct {
	Message string  `multipartForm:"name=message"`
	Meta    *string `multipartForm:"name=meta"`
	Subject string  `multipartForm:"name=subject"`
}

type SendFeedbackRequest struct {
	Request SendFeedbackRequestBody `request:"mediaType=multipart/form-data"`
}

type SendFeedbackResponse struct {
	ContentType string
	StatusCode  int64
}
