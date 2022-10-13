package operations

type GetProfileQueryParams struct {
	ID      *string `queryParam:"style=form,explode=true,name=id"`
	Service *string `queryParam:"style=form,explode=true,name=service"`
}

type GetProfileRequest struct {
	QueryParams GetProfileQueryParams
}

type GetProfileResponse struct {
	ContentType string
	StatusCode  int64
}
