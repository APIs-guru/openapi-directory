package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConfigurationAddressServerList = []string{
	"https://conversations.twilio.com",
}

type FetchConfigurationAddressPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchConfigurationAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConfigurationAddressRequest struct {
	ServerURL  *string
	PathParams FetchConfigurationAddressPathParams
	Security   FetchConfigurationAddressSecurity
}

type FetchConfigurationAddressResponse struct {
	ContentType                         string
	StatusCode                          int64
	ConversationsV1ConfigurationAddress *shared.ConversationsV1ConfigurationAddress
}
