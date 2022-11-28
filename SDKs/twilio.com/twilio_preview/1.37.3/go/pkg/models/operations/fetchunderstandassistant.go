package operations

import (
	"openapi/pkg/models/shared"
)

var FetchUnderstandAssistantServerList = []string{
	"https://preview.twilio.com",
}

type FetchUnderstandAssistantPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type FetchUnderstandAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchUnderstandAssistantRequest struct {
	ServerURL  *string
	PathParams FetchUnderstandAssistantPathParams
	Security   FetchUnderstandAssistantSecurity
}

type FetchUnderstandAssistantResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewUnderstandAssistant *shared.PreviewUnderstandAssistant
}
