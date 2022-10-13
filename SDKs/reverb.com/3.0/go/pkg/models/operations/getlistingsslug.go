package operations

type GetListingsSlugPathParams struct {
	Slug string `pathParam:"style=simple,explode=false,name=slug"`
}

type GetListingsSlugRequest struct {
	PathParams GetListingsSlugPathParams
}

type GetListingsSlugResponse struct {
	ContentType string
	StatusCode  int64
}
