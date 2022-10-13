package operations

import (
	"openapi/pkg/models/shared"
)

type RefundPaymentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RefundPaymentRequest struct {
	Request  shared.RefundPaymentRequest `request:"mediaType=application/json"`
	Security RefundPaymentSecurity
}

type RefundPaymentResponse struct {
	ContentType           string
	RefundPaymentResponse *shared.RefundPaymentResponse
	StatusCode            int64
}
