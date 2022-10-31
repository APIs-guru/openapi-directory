package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateServiceServers = []string{
	"https://sync.twilio.com",
}

type UpdateServicePathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateServiceUpdateServiceRequest struct {
	ACLEnabled                    *bool   `form:"name=AclEnabled"`
	FriendlyName                  *string `form:"name=FriendlyName"`
	ReachabilityDebouncingEnabled *bool   `form:"name=ReachabilityDebouncingEnabled"`
	ReachabilityDebouncingWindow  *int64  `form:"name=ReachabilityDebouncingWindow"`
	ReachabilityWebhooksEnabled   *bool   `form:"name=ReachabilityWebhooksEnabled"`
	WebhookURL                    *string `form:"name=WebhookUrl"`
	WebhooksFromRestEnabled       *bool   `form:"name=WebhooksFromRestEnabled"`
}

type UpdateServiceSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateServiceRequest struct {
	ServerURL  *string
	PathParams UpdateServicePathParams
	Request    *UpdateServiceUpdateServiceRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateServiceSecurity
}

type UpdateServiceResponse struct {
	ContentType   string
	StatusCode    int64
	SyncV1Service *shared.SyncV1Service
}
