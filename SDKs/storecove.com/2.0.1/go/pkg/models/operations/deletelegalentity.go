package operations

type DeleteLegalEntityPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteLegalEntityRequest struct {
	PathParams DeleteLegalEntityPathParams
}

type DeleteLegalEntityResponse struct {
	ContentType string
	StatusCode  int64
}
