package operations

type SearchHeaders struct {
	GalaxyApName     *string `header:"name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"name=galaxy-ap-password"`
	GalaxySearchType *string `header:"name=galaxy-search-type"`
}

type SearchRequestBodyAddress struct {
	AddressLine1 *string `json:"addressLine1"`
	AddressLine2 *string `json:"addressLine2"`
}

type SearchRequestBody struct {
	Address     *SearchRequestBodyAddress `json:"Address"`
	Age         *float64                  `json:"Age"`
	Dob         *string                   `json:"Dob"`
	Email       *string                   `json:"Email"`
	FirstName   *string                   `json:"FirstName"`
	LastName    *string                   `json:"LastName"`
	MiddleName  *string                   `json:"MiddleName"`
	PhoneNumber *string                   `json:"PhoneNumber"`
}

type SearchRequest struct {
	Headers SearchHeaders
	Request *SearchRequestBody `request:"mediaType=application/json"`
}

type SearchResponse struct {
	ContentType string
	StatusCode  int64
}
