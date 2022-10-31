package operations

import (
"openapi/pkg/models/shared")
var CreateConfigurationAddressServers = []string{
	"https://conversations.twilio.com",
}

type CreateConfigurationAddressCreateConfigurationAddressRequest struct {
    Address string `form:"name=Address"`
    AutoCreationConversationServiceSid *string `form:"name=AutoCreation.ConversationServiceSid"`
    AutoCreationEnabled *bool `form:"name=AutoCreation.Enabled"`
    AutoCreationStudioFlowSid *string `form:"name=AutoCreation.StudioFlowSid"`
    AutoCreationStudioRetryCount *int64 `form:"name=AutoCreation.StudioRetryCount"`
    AutoCreationType *shared.ConfigurationAddressEnumAutoCreationTypeEnum `form:"name=AutoCreation.Type"`
    AutoCreationWebhookFilters []string `form:"name=AutoCreation.WebhookFilters"`
    AutoCreationWebhookMethod *shared.ConfigurationAddressEnumMethodEnum `form:"name=AutoCreation.WebhookMethod"`
    AutoCreationWebhookURL *string `form:"name=AutoCreation.WebhookUrl"`
    FriendlyName *string `form:"name=FriendlyName"`
    Type shared.ConfigurationAddressEnumTypeEnum `form:"name=Type"`
    
}

type CreateConfigurationAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateConfigurationAddressRequest struct {
    ServerURL *string 
    Request *CreateConfigurationAddressCreateConfigurationAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateConfigurationAddressSecurity 
    
}

type CreateConfigurationAddressResponse struct {
    ContentType string 
    StatusCode int64 
    ConversationsV1ConfigurationAddress *shared.ConversationsV1ConfigurationAddress 
    
}

