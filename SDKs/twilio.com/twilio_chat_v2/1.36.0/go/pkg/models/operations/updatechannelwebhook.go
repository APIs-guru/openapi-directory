package operations

import (
"openapi/pkg/models/shared")
var UpdateChannelWebhookServers = []string{
	"https://chat.twilio.com",
}

type UpdateChannelWebhookPathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type UpdateChannelWebhookUpdateChannelWebhookRequest struct {
    ConfigurationFilters []string `form:"name=Configuration.Filters"`
    ConfigurationFlowSid *string `form:"name=Configuration.FlowSid"`
    ConfigurationMethod *shared.ChannelWebhookEnumMethodEnum `form:"name=Configuration.Method"`
    ConfigurationRetryCount *int64 `form:"name=Configuration.RetryCount"`
    ConfigurationTriggers []string `form:"name=Configuration.Triggers"`
    ConfigurationURL *string `form:"name=Configuration.Url"`
    
}

type UpdateChannelWebhookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateChannelWebhookRequest struct {
    ServerURL *string 
    PathParams UpdateChannelWebhookPathParams 
    Request *UpdateChannelWebhookUpdateChannelWebhookRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateChannelWebhookSecurity 
    
}

type UpdateChannelWebhookResponse struct {
    ContentType string 
    StatusCode int64 
    ChatV2ServiceChannelChannelWebhook *shared.ChatV2ServiceChannelChannelWebhook 
    
}

