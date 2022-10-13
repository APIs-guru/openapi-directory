package operations

import (
	"openapi/pkg/models/shared"
)

var CreateUnderstandAssistantServers = []string{
	"https://preview.twilio.com",
}

type CreateUnderstandAssistantRequestBodyCreateUnderstandAssistantRequest struct {
	CallbackEvents    *string      `form:"name=CallbackEvents"`
	CallbackURL       *string      `form:"name=CallbackUrl"`
	FallbackActions   *interface{} `form:"name=FallbackActions"`
	FriendlyName      *string      `form:"name=FriendlyName"`
	InitiationActions *interface{} `form:"name=InitiationActions"`
	LogQueries        *bool        `form:"name=LogQueries"`
	StyleSheet        *interface{} `form:"name=StyleSheet"`
	UniqueName        *string      `form:"name=UniqueName"`
}

type CreateUnderstandAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateUnderstandAssistantRequest struct {
	ServerURL *string
	Request   *CreateUnderstandAssistantRequestBodyCreateUnderstandAssistantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateUnderstandAssistantSecurity
}

type CreateUnderstandAssistantResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewUnderstandAssistant *shared.PreviewUnderstandAssistant
}
