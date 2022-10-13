package operations

type PostContactEnrichHeaders struct {
	GalaxyApName     *string `header:"name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"name=galaxy-ap-password"`
	GalaxySearchType *string `header:"name=galaxy-search-type"`
}

type PostContactEnrichRequestBodyAddress struct {
	AddressLine1 *string `json:"addressLine1"`
	AddressLine2 *string `json:"addressLine2"`
}

type PostContactEnrichRequestBody struct {
	Address     *PostContactEnrichRequestBodyAddress `json:"Address"`
	Age         *float64                             `json:"Age"`
	Dob         *string                              `json:"Dob"`
	Email       *string                              `json:"Email"`
	FirstName   *string                              `json:"FirstName"`
	LastName    *string                              `json:"LastName"`
	MiddleName  *string                              `json:"MiddleName"`
	PhoneNumber *string                              `json:"PhoneNumber"`
}

type PostContactEnrichRequest struct {
	Headers PostContactEnrichHeaders
	Request *PostContactEnrichRequestBody `request:"mediaType=application/json"`
}

type PostContactEnrichResponse struct {
	ContentType string
	StatusCode  int64
}
