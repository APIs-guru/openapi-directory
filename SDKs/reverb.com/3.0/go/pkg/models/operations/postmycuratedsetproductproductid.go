package operations

type PostMyCuratedSetProductProductIDPathParams struct {
	ProductID string `pathParam:"style=simple,explode=false,name=product_id"`
}

type PostMyCuratedSetProductProductIDRequest struct {
	PathParams PostMyCuratedSetProductProductIDPathParams
}

type PostMyCuratedSetProductProductIDResponse struct {
	ContentType string
	StatusCode  int64
}
