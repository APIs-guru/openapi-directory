package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateConfigurationAddressServers = []string{
	"https://conversations.twilio.com",
}

type UpdateConfigurationAddressPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateConfigurationAddressRequestBodyUpdateConfigurationAddressRequest struct {
	AutoCreationConversationServiceSid *string                                              `form:"name=AutoCreation.ConversationServiceSid"`
	AutoCreationEnabled                *bool                                                `form:"name=AutoCreation.Enabled"`
	AutoCreationStudioFlowSid          *string                                              `form:"name=AutoCreation.StudioFlowSid"`
	AutoCreationStudioRetryCount       *int64                                               `form:"name=AutoCreation.StudioRetryCount"`
	AutoCreationType                   *shared.ConfigurationAddressEnumAutoCreationTypeEnum `form:"name=AutoCreation.Type"`
	AutoCreationWebhookFilters         []string                                             `form:"name=AutoCreation.WebhookFilters"`
	AutoCreationWebhookMethod          *shared.ConfigurationAddressEnumMethodEnum           `form:"name=AutoCreation.WebhookMethod"`
	AutoCreationWebhookURL             *string                                              `form:"name=AutoCreation.WebhookUrl"`
	FriendlyName                       *string                                              `form:"name=FriendlyName"`
}

type UpdateConfigurationAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateConfigurationAddressRequest struct {
	ServerURL  *string
	PathParams UpdateConfigurationAddressPathParams
	Request    *UpdateConfigurationAddressRequestBodyUpdateConfigurationAddressRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateConfigurationAddressSecurity
}

type UpdateConfigurationAddressResponse struct {
	ContentType                         string
	StatusCode                          int64
	ConversationsV1ConfigurationAddress *shared.ConversationsV1ConfigurationAddress
}
