package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyOrdersSellingAwaitingShipmentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetMyOrdersSellingAwaitingShipmentRequest struct {
	Security GetMyOrdersSellingAwaitingShipmentSecurity
}

type GetMyOrdersSellingAwaitingShipmentResponse struct {
	ContentType string
	StatusCode  int64
}
