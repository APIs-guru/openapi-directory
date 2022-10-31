package operations

type GetPdfPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=check_id"`
}

type GetPdfQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetPdfRequest struct {
	PathParams  GetPdfPathParams
	QueryParams GetPdfQueryParams
}

type GetPdfResponse struct {
	ContentType string
	StatusCode  int64
}
