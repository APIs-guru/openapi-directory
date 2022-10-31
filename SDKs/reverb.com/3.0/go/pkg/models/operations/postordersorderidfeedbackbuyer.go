package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrdersOrderIDFeedbackBuyerPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
}

type PostOrdersOrderIDFeedbackBuyerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostOrdersOrderIDFeedbackBuyerRequest struct {
	PathParams PostOrdersOrderIDFeedbackBuyerPathParams
	Security   PostOrdersOrderIDFeedbackBuyerSecurity
}

type PostOrdersOrderIDFeedbackBuyerResponse struct {
	ContentType string
	StatusCode  int64
}
