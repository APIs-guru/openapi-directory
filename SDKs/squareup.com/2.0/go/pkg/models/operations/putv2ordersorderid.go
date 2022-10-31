package operations

import (
	"openapi/pkg/models/shared"
)

type PutV2OrdersOrderIDPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=order_id"`
}

type PutV2OrdersOrderIDSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutV2OrdersOrderIDRequest struct {
	PathParams PutV2OrdersOrderIDPathParams
	Request    shared.UpdateOrderRequest `request:"mediaType=application/json"`
	Security   PutV2OrdersOrderIDSecurity
}

type PutV2OrdersOrderIDResponse struct {
	ContentType         string
	StatusCode          int64
	UpdateOrderResponse *shared.UpdateOrderResponse
}
