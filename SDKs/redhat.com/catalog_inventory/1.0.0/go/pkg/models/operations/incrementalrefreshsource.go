package operations

type IncrementalRefreshSourcePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type IncrementalRefreshSourceRequest struct {
	PathParams IncrementalRefreshSourcePathParams
}

type IncrementalRefreshSourceResponse struct {
	ContentType string
	StatusCode  int64
}
