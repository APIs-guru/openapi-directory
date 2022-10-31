package operations

type GetCategoriesUUIDPathParams struct {
	UUID string `pathParam:"style=simple,explode=false,name=uuid"`
}

type GetCategoriesUUIDRequest struct {
	PathParams GetCategoriesUUIDPathParams
}

type GetCategoriesUUIDResponse struct {
	ContentType string
	StatusCode  int64
}
