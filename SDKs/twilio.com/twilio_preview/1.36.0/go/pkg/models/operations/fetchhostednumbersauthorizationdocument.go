package operations

import (
"openapi/pkg/models/shared")
var FetchHostedNumbersAuthorizationDocumentServers = []string{
	"https://preview.twilio.com",
}

type FetchHostedNumbersAuthorizationDocumentPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type FetchHostedNumbersAuthorizationDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchHostedNumbersAuthorizationDocumentRequest struct {
    ServerURL *string 
    PathParams FetchHostedNumbersAuthorizationDocumentPathParams 
    Security FetchHostedNumbersAuthorizationDocumentSecurity 
    
}

type FetchHostedNumbersAuthorizationDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewHostedNumbersAuthorizationDocument *shared.PreviewHostedNumbersAuthorizationDocument 
    
}

