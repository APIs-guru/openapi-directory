package operations

import (
	"openapi/pkg/models/shared"
)

type WithdrawPaymentPathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type WithdrawPaymentRequest struct {
	PathParams WithdrawPaymentPathParams
	Request    shared.WithdrawPaymentRequest `request:"mediaType=application/json"`
}

type WithdrawPaymentResponse struct {
	ContentType       string
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
