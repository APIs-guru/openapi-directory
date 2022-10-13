package operations

import (
	"openapi/pkg/models/shared"
)

var ListMessagingConfigurationServers = []string{
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

type ListMessagingConfigurationRequest struct {
	ServerURL   *string
	PathParams  ListMessagingConfigurationPathParams
	QueryParams ListMessagingConfigurationQueryParams
	Security    ListMessagingConfigurationSecurity
}

type ListMessagingConfiguration200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url"`
	Key             *string `json:"key"`
	NextPageURL     *string `json:"next_page_url"`
	Page            *int64  `json:"page"`
	PageSize        *int64  `json:"page_size"`
	PreviousPageURL *string `json:"previous_page_url"`
	URL             *string `json:"url"`
}

type ListMessagingConfiguration200ApplicationJSONListMessagingConfigurationResponse struct {
	MessagingConfigurations []shared.VerifyV2ServiceMessagingConfiguration    `json:"messaging_configurations"`
	Meta                    *ListMessagingConfiguration200ApplicationJSONMeta `json:"meta"`
}

type ListMessagingConfigurationResponse struct {
	ContentType                        string
	ListMessagingConfigurationResponse *ListMessagingConfiguration200ApplicationJSONListMessagingConfigurationResponse
	StatusCode                         int64
}
