package operations

import (
	"openapi/pkg/models/shared"
)

var ListConfigurationAddressServers = []string{
	"https://conversations.twilio.com",
}

type ListConfigurationAddressQueryParams struct {
	PageSize *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	Type     *string `queryParam:"style=form,explode=true,name=Type"`
}

type ListConfigurationAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListConfigurationAddressRequest struct {
	ServerURL   *string
	QueryParams ListConfigurationAddressQueryParams
	Security    ListConfigurationAddressSecurity
}

type ListConfigurationAddress200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListConfigurationAddress200ApplicationJSONListConfigurationAddressResponse struct {
	AddressConfigurations []shared.ConversationsV1ConfigurationAddress    `json:"address_configurations,omitempty"`
	Meta                  *ListConfigurationAddress200ApplicationJSONMeta `json:"meta,omitempty"`
}

type ListConfigurationAddressResponse struct {
	ContentType                      string
	ListConfigurationAddressResponse *ListConfigurationAddress200ApplicationJSONListConfigurationAddressResponse
	StatusCode                       int64
}
