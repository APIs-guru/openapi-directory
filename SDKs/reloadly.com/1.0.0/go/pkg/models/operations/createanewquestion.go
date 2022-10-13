package operations

type CreateANewQuestionRequestBody struct {
	Choices  []string `json:"choices"`
	Question *string  `json:"question"`
}

type CreateANewQuestionRequest struct {
	Request *CreateANewQuestionRequestBody `request:"mediaType=application/json"`
}

type CreateANewQuestionResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}
