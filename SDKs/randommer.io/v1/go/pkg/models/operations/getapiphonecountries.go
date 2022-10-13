package operations

type GetAPIPhoneCountriesHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPIPhoneCountriesRequest struct {
	Headers GetAPIPhoneCountriesHeaders
}

type GetAPIPhoneCountriesResponse struct {
	ContentType string
	StatusCode  int64
}
