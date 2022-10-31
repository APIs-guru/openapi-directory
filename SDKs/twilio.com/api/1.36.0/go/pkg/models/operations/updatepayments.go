package operations

import (
"openapi/pkg/models/shared")
var UpdatePaymentsServers = []string{
	"https://api.twilio.com",
}

type UpdatePaymentsPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CallSid string `pathParam:"style=simple,explode=false,name=CallSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdatePaymentsUpdatePaymentsRequest struct {
    Capture *shared.PaymentsEnumCaptureEnum `form:"name=Capture"`
    IdempotencyKey string `form:"name=IdempotencyKey"`
    Status *shared.PaymentsEnumStatusEnum `form:"name=Status"`
    StatusCallback string `form:"name=StatusCallback"`
    
}

type UpdatePaymentsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdatePaymentsRequest struct {
    ServerURL *string 
    PathParams UpdatePaymentsPathParams 
    Request *UpdatePaymentsUpdatePaymentsRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdatePaymentsSecurity 
    
}

type UpdatePaymentsResponse struct {
    ContentType string 
    StatusCode int64 
    APIV2010AccountCallPayments *shared.APIV2010AccountCallPayments 
    
}

