package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteConfigurationAddressServerList = []string{
	"https://conversations.twilio.com",
}

type DeleteConfigurationAddressPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type DeleteConfigurationAddressSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteConfigurationAddressRequest struct {
	ServerURL  *string
	PathParams DeleteConfigurationAddressPathParams
	Security   DeleteConfigurationAddressSecurity
}

type DeleteConfigurationAddressResponse struct {
	ContentType string
	StatusCode  int64
}
