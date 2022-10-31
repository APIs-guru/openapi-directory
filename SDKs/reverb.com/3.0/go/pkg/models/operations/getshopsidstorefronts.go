package operations

type GetShopsIDStorefrontsPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetShopsIDStorefrontsRequest struct {
	PathParams GetShopsIDStorefrontsPathParams
}

type GetShopsIDStorefrontsResponse struct {
	ContentType string
	StatusCode  int64
}
