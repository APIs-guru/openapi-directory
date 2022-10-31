package operations

import (
"openapi/pkg/models/shared")
var FetchVerificationServers = []string{
	"https://verify.twilio.com",
}

type FetchVerificationPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchVerificationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchVerificationRequest struct {
    ServerURL *string 
    PathParams FetchVerificationPathParams 
    Security FetchVerificationSecurity 
    
}

type FetchVerificationResponse struct {
    ContentType string 
    StatusCode int64 
    VerifyV2ServiceVerification *shared.VerifyV2ServiceVerification 
    
}

