package operations

import (
	"openapi/pkg/models/shared"
)

type GetShopPaymentMethodsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetShopPaymentMethodsRequest struct {
	Security GetShopPaymentMethodsSecurity
}

type GetShopPaymentMethodsResponse struct {
	ContentType string
	StatusCode  int64
}
