package operations

import (
	"openapi/pkg/models/shared"
)

type CompletePaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=payment_id"`
}

type CompletePaymentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CompletePaymentRequest struct {
	PathParams CompletePaymentPathParams
	Security   CompletePaymentSecurity
}

type CompletePaymentResponse struct {
	CompletePaymentResponse *shared.CompletePaymentResponse
	ContentType             string
	StatusCode              int64
}
