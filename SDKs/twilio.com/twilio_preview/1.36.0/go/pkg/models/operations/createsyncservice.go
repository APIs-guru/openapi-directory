package operations

import (
"openapi/pkg/models/shared")
var CreateSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type CreateSyncServiceCreateSyncServiceRequest struct {
    ACLEnabled *bool `form:"name=AclEnabled"`
    FriendlyName *string `form:"name=FriendlyName"`
    ReachabilityWebhooksEnabled *bool `form:"name=ReachabilityWebhooksEnabled"`
    WebhookURL *string `form:"name=WebhookUrl"`
    
}

type CreateSyncServiceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateSyncServiceRequest struct {
    ServerURL *string 
    Request *CreateSyncServiceCreateSyncServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateSyncServiceSecurity 
    
}

type CreateSyncServiceResponse struct {
    ContentType string 
    StatusCode int64 
    PreviewSyncService *shared.PreviewSyncService 
    
}

