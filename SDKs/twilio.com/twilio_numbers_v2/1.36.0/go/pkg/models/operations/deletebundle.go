package operations

import (
"openapi/pkg/models/shared")
var DeleteBundleServers = []string{
	"https://numbers.twilio.com",
}

type DeleteBundlePathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteBundleSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteBundleRequest struct {
    ServerURL *string 
    PathParams DeleteBundlePathParams 
    Security DeleteBundleSecurity 
    
}

type DeleteBundleResponse struct {
    ContentType string 
    StatusCode int64 
    
}

