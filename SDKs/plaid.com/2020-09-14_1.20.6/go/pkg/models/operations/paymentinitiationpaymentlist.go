package operations

import (
	"openapi/pkg/models/shared"
)

type PaymentInitiationPaymentListRequest struct {
	Request shared.PaymentInitiationPaymentListRequest `request:"mediaType=application/json"`
}

type PaymentInitiationPaymentListResponse struct {
	ContentType                          string
	PaymentInitiationPaymentListResponse map[string]interface{}
	StatusCode                           int64
}
