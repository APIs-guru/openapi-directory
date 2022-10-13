package operations

type GetAPIPhoneGenerateQueryParams struct {
	CountryCode string `queryParam:"style=form,explode=true,name=CountryCode"`
	Quantity    int32  `queryParam:"style=form,explode=true,name=Quantity"`
}

type GetAPIPhoneGenerateHeaders struct {
	XAPIKey *string `header:"name=X-Api-Key"`
}

type GetAPIPhoneGenerateRequest struct {
	QueryParams GetAPIPhoneGenerateQueryParams
	Headers     GetAPIPhoneGenerateHeaders
}

type GetAPIPhoneGenerateResponse struct {
	ContentType string
	StatusCode  int64
}
