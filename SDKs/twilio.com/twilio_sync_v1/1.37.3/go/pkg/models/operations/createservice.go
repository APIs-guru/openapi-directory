package operations

import (
	"openapi/pkg/models/shared"
)

var CreateServiceServerList = []string{
	"https://sync.twilio.com",
}

type CreateServiceCreateServiceRequest struct {
	ACLEnabled                    *bool   `form:"name=AclEnabled"`
	FriendlyName                  *string `form:"name=FriendlyName"`
	ReachabilityDebouncingEnabled *bool   `form:"name=ReachabilityDebouncingEnabled"`
	ReachabilityDebouncingWindow  *int64  `form:"name=ReachabilityDebouncingWindow"`
	ReachabilityWebhooksEnabled   *bool   `form:"name=ReachabilityWebhooksEnabled"`
	WebhookURL                    *string `form:"name=WebhookUrl"`
	WebhooksFromRestEnabled       *bool   `form:"name=WebhooksFromRestEnabled"`
}

type CreateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateServiceRequest struct {
	ServerURL *string
	Request   *CreateServiceCreateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateServiceSecurity
}

type CreateServiceResponse struct {
	ContentType   string
	StatusCode    int64
	SyncV1Service *shared.SyncV1Service
}
