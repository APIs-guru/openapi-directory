package operations

import (
"openapi/pkg/models/shared")
var DeleteDocumentServers = []string{
	"https://sync.twilio.com",
}

type DeleteDocumentPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type DeleteDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type DeleteDocumentRequest struct {
    ServerURL *string 
    PathParams DeleteDocumentPathParams 
    Security DeleteDocumentSecurity 
    
}

type DeleteDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    
}

