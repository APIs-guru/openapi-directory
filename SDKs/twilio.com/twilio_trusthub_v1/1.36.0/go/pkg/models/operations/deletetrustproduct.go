package operations

import (
"openapi/pkg/models/shared")
var DeleteTrustProductServers = []string{
	"https://trusthub.twilio.com",
}

type DeleteTrustProductPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteTrustProductSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteTrustProductRequest struct {
    ServerURL *string 
    PathParams DeleteTrustProductPathParams 
    Security DeleteTrustProductSecurity 
    
}

type DeleteTrustProductResponse struct {
    ContentType string 
    StatusCode int64 
    
}

