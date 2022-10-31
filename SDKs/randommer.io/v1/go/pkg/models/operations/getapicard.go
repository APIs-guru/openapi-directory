package operations

type GetAPICardQueryParams struct {
	Type *string `queryParam:"style=form,explode=true,name=type"`
}

type GetAPICardHeaders struct {
	XAPIKey *string `header:"style=simple,explode=false,name=X-Api-Key"`
}

type GetAPICardRequest struct {
	QueryParams GetAPICardQueryParams
	Headers     GetAPICardHeaders
}

type GetAPICardResponse struct {
	ContentType string
	StatusCode  int64
}
