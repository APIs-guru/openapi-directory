package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandAssistantServerList = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandAssistantPathParams struct {
	Sid string `pathParam:"style=simple,explode=false,name=Sid"`
}

type UpdateUnderstandAssistantUpdateUnderstandAssistantRequest struct {
	CallbackEvents    *string      `form:"name=CallbackEvents"`
	CallbackURL       *string      `form:"name=CallbackUrl"`
	FallbackActions   *interface{} `form:"name=FallbackActions"`
	FriendlyName      *string      `form:"name=FriendlyName"`
	InitiationActions *interface{} `form:"name=InitiationActions"`
	LogQueries        *bool        `form:"name=LogQueries"`
	StyleSheet        *interface{} `form:"name=StyleSheet"`
	UniqueName        *string      `form:"name=UniqueName"`
}

type UpdateUnderstandAssistantSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandAssistantRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandAssistantPathParams
	Request    *UpdateUnderstandAssistantUpdateUnderstandAssistantRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandAssistantSecurity
}

type UpdateUnderstandAssistantResponse struct {
	ContentType                string
	StatusCode                 int64
	PreviewUnderstandAssistant *shared.PreviewUnderstandAssistant
}
