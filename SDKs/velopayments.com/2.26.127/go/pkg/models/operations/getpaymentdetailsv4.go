package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentDetailsV4PathParams struct {
	PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
}

type GetPaymentDetailsV4QueryParams struct {
	Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
}

type GetPaymentDetailsV4Request struct {
	PathParams  GetPaymentDetailsV4PathParams
	QueryParams GetPaymentDetailsV4QueryParams
}

type GetPaymentDetailsV4Response struct {
	ContentType       string
	PaymentResponseV4 *shared.PaymentResponseV4
	StatusCode        int64
	InlineResponse400 *interface{}
	InlineResponse401 *interface{}
	InlineResponse403 *interface{}
	InlineResponse404 *interface{}
}
