package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveOrderPathParams struct {
	LocationID string `pathParam:"style=simple,explode=false,name=location_id"`
	OrderID    string `pathParam:"style=simple,explode=false,name=order_id"`
}

type RetrieveOrderSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveOrderRequest struct {
	PathParams RetrieveOrderPathParams
	Security   RetrieveOrderSecurity
}

type RetrieveOrderResponse struct {
	ContentType string
	StatusCode  int64
	V1Order     *shared.V1Order
}
