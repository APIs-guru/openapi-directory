package operations

import (
"openapi/pkg/models/shared")

type GetPaymentRefundPathParams struct {
    RefundID string `pathParam:"style=simple,explode=false,name=refund_id"`
    
}

type GetPaymentRefundSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetPaymentRefundRequest struct {
    PathParams GetPaymentRefundPathParams 
    Security GetPaymentRefundSecurity 
    
}

type GetPaymentRefundResponse struct {
    ContentType string 
    GetPaymentRefundResponse *shared.GetPaymentRefundResponse 
    StatusCode int64 
    
}

