package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateSyncServiceServers = []string{
	"https://preview.twilio.com",
}

type UpdateSyncServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateSyncServiceRequestBodyUpdateSyncServiceRequest struct {
	ACLEnabled                  *bool   `form:"name=AclEnabled"`
	FriendlyName                *string `form:"name=FriendlyName"`
	ReachabilityWebhooksEnabled *bool   `form:"name=ReachabilityWebhooksEnabled"`
	WebhookURL                  *string `form:"name=WebhookUrl"`
}

type UpdateSyncServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateSyncServiceRequest struct {
	ServerURL  *string
	PathParams UpdateSyncServicePathParams
	Request    *UpdateSyncServiceRequestBodyUpdateSyncServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateSyncServiceSecurity
}

type UpdateSyncServiceResponse struct {
	ContentType        string
	StatusCode         int64
	PreviewSyncService *shared.PreviewSyncService
}
