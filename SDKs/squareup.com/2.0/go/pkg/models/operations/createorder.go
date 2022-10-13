package operations

import (
	"openapi/pkg/models/shared"
)

type CreateOrderSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateOrderRequest struct {
	Request  shared.CreateOrderRequest `request:"mediaType=application/json"`
	Security CreateOrderSecurity
}

type CreateOrderResponse struct {
	ContentType         string
	CreateOrderResponse *shared.CreateOrderResponse
	StatusCode          int64
}
