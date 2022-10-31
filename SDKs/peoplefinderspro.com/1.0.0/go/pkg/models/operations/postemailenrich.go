package operations

type PostEmailEnrichHeaders struct {
	GalaxyApName     *string `header:"style=simple,explode=false,name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"style=simple,explode=false,name=galaxy-ap-password"`
	GalaxySearchType *string `header:"style=simple,explode=false,name=galaxy-search-type"`
}

type PostEmailEnrichRequestBody struct {
	Email *string `json:"Email,omitempty"`
}

type PostEmailEnrichRequest struct {
	Headers PostEmailEnrichHeaders
	Request *PostEmailEnrichRequestBody `request:"mediaType=application/json"`
}

type PostEmailEnrichResponse struct {
	ContentType string
	StatusCode  int64
}
