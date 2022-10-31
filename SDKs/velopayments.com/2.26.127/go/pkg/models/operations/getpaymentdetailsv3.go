package operations

import (
"openapi/pkg/models/shared")

type GetPaymentDetailsV3PathParams struct {
    PaymentID string `pathParam:"style=simple,explode=false,name=paymentId"`
    
}

type GetPaymentDetailsV3QueryParams struct {
    Sensitive *bool `queryParam:"style=form,explode=true,name=sensitive"`
    
}

type GetPaymentDetailsV3Request struct {
    PathParams GetPaymentDetailsV3PathParams 
    QueryParams GetPaymentDetailsV3QueryParams 
    
}

type GetPaymentDetailsV3Response struct {
    ContentType string 
    PaymentResponseV3 *shared.PaymentResponseV3 
    StatusCode int64 
    InlineResponse400 *interface{} 
    InlineResponse401 *interface{} 
    InlineResponse403 *interface{} 
    InlineResponse404 *interface{} 
    
}

