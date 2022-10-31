package operations

type GetOrdersOrderIDFeedbackSellerPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
}

type GetOrdersOrderIDFeedbackSellerRequest struct {
	PathParams GetOrdersOrderIDFeedbackSellerPathParams
}

type GetOrdersOrderIDFeedbackSellerResponse struct {
	ContentType string
	StatusCode  int64
}
