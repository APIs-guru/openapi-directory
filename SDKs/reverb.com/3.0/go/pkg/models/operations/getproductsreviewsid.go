package operations

type GetProductsReviewsIDPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsReviewsIDRequest struct {
	PathParams GetProductsReviewsIDPathParams
}

type GetProductsReviewsIDResponse struct {
	ContentType string
	StatusCode  int64
}
