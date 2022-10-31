package operations

import (
"openapi/pkg/models/shared")
var UpdateStyleSheetServers = []string{
	"https://autopilot.twilio.com",
}

type UpdateStyleSheetPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    
}

type UpdateStyleSheetUpdateStyleSheetRequest struct {
    StyleSheet *interface{} `form:"name=StyleSheet"`
    
}

type UpdateStyleSheetSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateStyleSheetRequest struct {
    ServerURL *string 
    PathParams UpdateStyleSheetPathParams 
    Request *UpdateStyleSheetUpdateStyleSheetRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateStyleSheetSecurity 
    
}

type UpdateStyleSheetResponse struct {
    ContentType string 
    StatusCode int64 
    AutopilotV1AssistantStyleSheet *shared.AutopilotV1AssistantStyleSheet 
    
}

