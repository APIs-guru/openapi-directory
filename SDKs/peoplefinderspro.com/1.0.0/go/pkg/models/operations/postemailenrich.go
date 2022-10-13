package operations

type PostEmailEnrichHeaders struct {
	GalaxyApName     *string `header:"name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"name=galaxy-ap-password"`
	GalaxySearchType *string `header:"name=galaxy-search-type"`
}

type PostEmailEnrichRequestBody struct {
	Email *string `json:"Email"`
}

type PostEmailEnrichRequest struct {
	Headers PostEmailEnrichHeaders
	Request *PostEmailEnrichRequestBody `request:"mediaType=application/json"`
}

type PostEmailEnrichResponse struct {
	ContentType string
	StatusCode  int64
}
