package operations

import (
"openapi/pkg/models/shared")
var UpdateDocumentServers = []string{
	"https://sync.twilio.com",
}

type UpdateDocumentPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateDocumentHeaders struct {
    IfMatch *string `header:"style=simple,explode=false,name=If-Match"`
    
}

type UpdateDocumentUpdateDocumentRequest struct {
    Data *interface{} `form:"name=Data"`
    TTL *int64 `form:"name=Ttl"`
    
}

type UpdateDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateDocumentRequest struct {
    ServerURL *string 
    PathParams UpdateDocumentPathParams 
    Headers UpdateDocumentHeaders 
    Request *UpdateDocumentUpdateDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateDocumentSecurity 
    
}

type UpdateDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    SyncV1ServiceDocument *shared.SyncV1ServiceDocument 
    
}

