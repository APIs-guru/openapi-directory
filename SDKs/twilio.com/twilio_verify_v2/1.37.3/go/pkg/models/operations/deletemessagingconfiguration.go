package operations

import (
	"openapi/pkg/models/shared"
)

var DeleteMessagingConfigurationServerList = []string{
	"https://verify.twilio.com",
}

type DeleteMessagingConfigurationPathParams struct {
	Country    string `pathParam:"style=simple,explode=false,name=Country"`
	ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
}

type DeleteMessagingConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type DeleteMessagingConfigurationRequest struct {
	ServerURL  *string
	PathParams DeleteMessagingConfigurationPathParams
	Security   DeleteMessagingConfigurationSecurity
}

type DeleteMessagingConfigurationResponse struct {
	ContentType string
	StatusCode  int64
}
