package operations

import (
	"openapi/pkg/models/shared"
)

type CancelPaymentByIdempotencyKeySecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CancelPaymentByIdempotencyKeyRequest struct {
	Request  shared.CancelPaymentByIdempotencyKeyRequest `request:"mediaType=application/json"`
	Security CancelPaymentByIdempotencyKeySecurity
}

type CancelPaymentByIdempotencyKeyResponse struct {
	CancelPaymentByIdempotencyKeyResponse *shared.CancelPaymentByIdempotencyKeyResponse
	ContentType                           string
	StatusCode                            int64
}
