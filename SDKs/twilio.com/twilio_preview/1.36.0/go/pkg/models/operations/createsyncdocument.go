package operations

import (
"openapi/pkg/models/shared")
var CreateSyncDocumentServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncDocumentPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type CreateSyncDocumentCreateSyncDocumentRequest struct {
    Data *interface{} `form:"name=Data"`
    UniqueName *string `form:"name=UniqueName"`
    
}

type CreateSyncDocumentSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSyncDocumentRequest struct {
    ServerURL *string 
    PathParams CreateSyncDocumentPathParams 
    Request *CreateSyncDocumentCreateSyncDocumentRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSyncDocumentSecurity 
    
}

type CreateSyncDocumentResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewSyncServiceDocument *shared.PreviewSyncServiceDocument 
    
}

