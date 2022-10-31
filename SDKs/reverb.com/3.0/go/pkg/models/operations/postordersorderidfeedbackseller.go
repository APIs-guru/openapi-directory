package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrdersOrderIDFeedbackSellerPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
}

type PostOrdersOrderIDFeedbackSellerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PostOrdersOrderIDFeedbackSellerRequest struct {
	PathParams PostOrdersOrderIDFeedbackSellerPathParams
	Security   PostOrdersOrderIDFeedbackSellerSecurity
}

type PostOrdersOrderIDFeedbackSellerResponse struct {
	ContentType string
	StatusCode  int64
}
