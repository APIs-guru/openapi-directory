package operations

import (
"openapi/pkg/models/shared")
var UpdateVerificationServers = []string{
	"https://verify.twilio.com",
}

type UpdateVerificationPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateVerificationUpdateVerificationRequest struct {
    Status shared.VerificationEnumStatusEnum `form:"name=Status"`
    
}

type UpdateVerificationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateVerificationRequest struct {
    ServerURL *string 
    PathParams UpdateVerificationPathParams 
    Request *UpdateVerificationUpdateVerificationRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateVerificationSecurity 
    
}

type UpdateVerificationResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceVerification *shared.VerifyV2ServiceVerification 
    
}

