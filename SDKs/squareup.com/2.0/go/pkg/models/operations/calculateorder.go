package operations

import (
	"openapi/pkg/models/shared"
)

type CalculateOrderSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CalculateOrderRequest struct {
	Request  shared.CalculateOrderRequest `request:"mediaType=application/json"`
	Security CalculateOrderSecurity
}

type CalculateOrderResponse struct {
	CalculateOrderResponse *shared.CalculateOrderResponse
	ContentType            string
	StatusCode             int64
}
