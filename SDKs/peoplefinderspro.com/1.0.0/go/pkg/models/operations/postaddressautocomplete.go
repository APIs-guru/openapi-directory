package operations

type PostAddressAutocompleteHeaders struct {
	GalaxyApName     *string `header:"style=simple,explode=false,name=galaxy-ap-name"`
	GalaxyApPassword *string `header:"style=simple,explode=false,name=galaxy-ap-password"`
	GalaxySearchType *string `header:"style=simple,explode=false,name=galaxy-search-type"`
}

type PostAddressAutocompleteRequestBody struct {
	Input *string `json:"Input,omitempty"`
}

type PostAddressAutocompleteRequest struct {
	Headers PostAddressAutocompleteHeaders
	Request *PostAddressAutocompleteRequestBody `request:"mediaType=application/json"`
}

type PostAddressAutocompleteResponse struct {
	ContentType string
	StatusCode  int64
}
