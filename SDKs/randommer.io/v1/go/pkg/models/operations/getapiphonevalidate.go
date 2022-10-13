package operations

type GetAPIPhoneValidateQueryParams struct {
	CountryCode *string `queryParam:"style=form,explode=true,name=CountryCode"`
	Telephone   string  `queryParam:"style=form,explode=true,name=telephone"`
}

type GetAPIPhoneValidateHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPIPhoneValidateRequest struct {
	QueryParams GetAPIPhoneValidateQueryParams
	Headers     GetAPIPhoneValidateHeaders
}

type GetAPIPhoneValidateResponse struct {
	ContentType string
	StatusCode  int64
}
