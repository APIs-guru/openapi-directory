package operations

type GetOrdersOrderIDFeedbackBuyerPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
}

type GetOrdersOrderIDFeedbackBuyerRequest struct {
	PathParams GetOrdersOrderIDFeedbackBuyerPathParams
}

type GetOrdersOrderIDFeedbackBuyerResponse struct {
	ContentType string
	StatusCode  int64
}
