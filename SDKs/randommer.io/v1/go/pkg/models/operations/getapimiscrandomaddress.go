package operations

type GetAPIMiscRandomAddressQueryParams struct {
	Culture *string `queryParam:"style=form,explode=true,name=culture"`
	Number  int32   `queryParam:"style=form,explode=true,name=number"`
}

type GetAPIMiscRandomAddressHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
}

type GetAPIMiscRandomAddressRequest struct {
	QueryParams GetAPIMiscRandomAddressQueryParams
	Headers     GetAPIMiscRandomAddressHeaders
}

type GetAPIMiscRandomAddressResponse struct {
	ContentType string
	StatusCode  int64
}
