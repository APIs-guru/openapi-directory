package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=payment_id"`
}

type GetPaymentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetPaymentRequest struct {
	PathParams GetPaymentPathParams
	Security   GetPaymentSecurity
}

type GetPaymentResponse struct {
	ContentType        string
	GetPaymentResponse *shared.GetPaymentResponse
	StatusCode         int64
}
