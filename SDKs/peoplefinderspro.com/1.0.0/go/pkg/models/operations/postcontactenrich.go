package operations

type PostContactEnrichHeaders struct {
	GalaxyApName     *string `header:"name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"name=galaxy-ap-password"`
	GalaxySearchType *string `header:"name=galaxy-search-type"`
}

type PostContactEnrichRequestBodyAddress struct {
	AddressLine1 *string `json:"addressLine1,omitempty"`
	AddressLine2 *string `json:"addressLine2,omitempty"`
}

type PostContactEnrichRequestBody struct {
	Address     *PostContactEnrichRequestBodyAddress `json:"Address,omitempty"`
	Age         *float64                             `json:"Age,omitempty"`
	Dob         *string                              `json:"Dob,omitempty"`
	Email       *string                              `json:"Email,omitempty"`
	FirstName   *string                              `json:"FirstName,omitempty"`
	LastName    *string                              `json:"LastName,omitempty"`
	MiddleName  *string                              `json:"MiddleName,omitempty"`
	PhoneNumber *string                              `json:"PhoneNumber,omitempty"`
}

type PostContactEnrichRequest struct {
	Headers PostContactEnrichHeaders
	Request *PostContactEnrichRequestBody `request:"mediaType=application/json"`
}

type PostContactEnrichResponse struct {
	ContentType string
	StatusCode  int64
}
