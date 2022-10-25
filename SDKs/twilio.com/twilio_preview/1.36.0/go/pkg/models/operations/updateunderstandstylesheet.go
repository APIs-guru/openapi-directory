package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateUnderstandStyleSheetServers = []string{
	"https://preview.twilio.com",
}

type UpdateUnderstandStyleSheetPathParams struct {
	AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
}

type UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest struct {
	StyleSheet *interface{} `form:"name=StyleSheet"`
}

type UpdateUnderstandStyleSheetSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateUnderstandStyleSheetRequest struct {
	ServerURL  *string
	PathParams UpdateUnderstandStyleSheetPathParams
	Request    *UpdateUnderstandStyleSheetUpdateUnderstandStyleSheetRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdateUnderstandStyleSheetSecurity
}

type UpdateUnderstandStyleSheetResponse struct {
	ContentType                          string
	StatusCode                           int64
	PreviewUnderstandAssistantStyleSheet *shared.PreviewUnderstandAssistantStyleSheet
}
