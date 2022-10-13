package operations

type GetAPISocialNumberHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPISocialNumberRequest struct {
	Headers GetAPISocialNumberHeaders
}

type GetAPISocialNumberResponse struct {
	ContentType string
	StatusCode  int64
}
