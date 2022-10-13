package operations

type GetAPICardTypesHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPICardTypesRequest struct {
	Headers GetAPICardTypesHeaders
}

type GetAPICardTypesResponse struct {
	ContentType string
	StatusCode  int64
}
