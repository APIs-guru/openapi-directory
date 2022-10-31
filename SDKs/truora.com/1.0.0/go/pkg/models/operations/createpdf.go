package operations

type CreatePdfPathParams struct {
	CheckID string `pathParam:"style=simple,explode=false,name=check_id"`
}

type CreatePdfRequest struct {
	PathParams CreatePdfPathParams
}

type CreatePdfResponse struct {
	ContentType string
	StatusCode  int64
}
