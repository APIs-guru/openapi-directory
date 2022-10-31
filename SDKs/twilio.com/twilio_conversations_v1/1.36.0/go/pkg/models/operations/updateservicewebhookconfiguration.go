package operations

import (
"openapi/pkg/models/shared")
var UpdateServiceWebhookConfigurationServers = []string{
	"https://conversations.twilio.com",
}

type UpdateServiceWebhookConfigurationPathParams struct {
    ChatServiceSid string `pathParam:"style=simple,explode=false,name=ChatServiceSid"`
    
}

type UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest struct {
    Filters []string `form:"name=Filters"`
    Method *string `form:"name=Method"`
    PostWebhookURL *string `form:"name=PostWebhookUrl"`
    PreWebhookURL *string `form:"name=PreWebhookUrl"`
    
}

type UpdateServiceWebhookConfigurationSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateServiceWebhookConfigurationRequest struct {
    ServerURL *string 
    PathParams UpdateServiceWebhookConfigurationPathParams 
    Request *UpdateServiceWebhookConfigurationUpdateServiceWebhookConfigurationRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateServiceWebhookConfigurationSecurity 
    
}

type UpdateServiceWebhookConfigurationResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration *shared.ConversationsV1ServiceServiceConfigurationServiceWebhookConfiguration 
    
}

