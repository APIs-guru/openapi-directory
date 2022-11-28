package operations

import (
	"openapi/pkg/models/shared"
)

var ListMessagingConfigurationServerList = []string{
	"https://verify.twilio.com",
}

type ListMessagingConfigurationPathParams struct {
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type ListMessagingConfigurationQueryParams struct {
	PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListMessagingConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListMessagingConfigurationListMessagingConfigurationResponseMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListMessagingConfigurationListMessagingConfigurationResponse struct {
	MessagingConfigurations []shared.VerifyV2ServiceMessagingConfiguration                    `json:"messaging_configurations,omitempty"`
	Meta                    *ListMessagingConfigurationListMessagingConfigurationResponseMeta `json:"meta,omitempty"`
}

type ListMessagingConfigurationRequest struct {
	ServerURL   *string
	PathParams  ListMessagingConfigurationPathParams
	QueryParams ListMessagingConfigurationQueryParams
	Security    ListMessagingConfigurationSecurity
}

type ListMessagingConfigurationResponse struct {
	ContentType                        string
	ListMessagingConfigurationResponse *ListMessagingConfigurationListMessagingConfigurationResponse
	StatusCode                         int64
}
