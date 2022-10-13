package operations

type RefreshSourcePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RefreshSourceRequest struct {
	PathParams RefreshSourcePathParams
}

type RefreshSourceResponse struct {
	ContentType string
	StatusCode  int64
}
