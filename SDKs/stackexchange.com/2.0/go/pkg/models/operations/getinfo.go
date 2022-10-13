package operations

type GetInfoQueryParams struct {
	Site string `queryParam:"style=form,explode=true,name=site"`
}

type GetInfoRequest struct {
	QueryParams GetInfoQueryParams
}

type GetInfoResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
