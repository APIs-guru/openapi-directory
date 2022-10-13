package operations

import (
	"openapi/pkg/models/shared"
)

var FetchConfigurationServers = []string{
	"https://flex-api.twilio.com",
}

type FetchConfigurationQueryParams struct {
	UIVersion *string `queryParam:"style=form,explode=true,name=UiVersion"`
}

type FetchConfigurationSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchConfigurationRequest struct {
	ServerURL   *string
	QueryParams FetchConfigurationQueryParams
	Security    FetchConfigurationSecurity
}

type FetchConfigurationResponse struct {
	ContentType         string
	StatusCode          int64
	FlexV1Configuration *shared.FlexV1Configuration
}
