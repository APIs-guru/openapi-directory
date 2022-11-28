package operations

import (
	"openapi/pkg/models/shared"
)

var CreateChannelWebhookServerList = []string{
	"https://ip-messaging.twilio.com",
}

type CreateChannelWebhookPathParams struct {
	ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type CreateChannelWebhookCreateChannelWebhookRequest struct {
	ConfigurationFilters    []string                             `form:"name=Configuration.Filters"`
	ConfigurationFlowSid    *string                              `form:"name=Configuration.FlowSid"`
	ConfigurationMethod     *shared.ChannelWebhookEnumMethodEnum `form:"name=Configuration.Method"`
	ConfigurationRetryCount *int64                               `form:"name=Configuration.RetryCount"`
	ConfigurationTriggers   []string                             `form:"name=Configuration.Triggers"`
	ConfigurationURL        *string                              `form:"name=Configuration.Url"`
	Type                    shared.ChannelWebhookEnumTypeEnum    `form:"name=Type"`
}

type CreateChannelWebhookSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateChannelWebhookRequest struct {
	ServerURL  *string
	PathParams CreateChannelWebhookPathParams
	Request    *CreateChannelWebhookCreateChannelWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CreateChannelWebhookSecurity
}

type CreateChannelWebhookResponse struct {
	ContentType                               string
	StatusCode                                int64
	IPMessagingV2ServiceChannelChannelWebhook *shared.IPMessagingV2ServiceChannelChannelWebhook
}
