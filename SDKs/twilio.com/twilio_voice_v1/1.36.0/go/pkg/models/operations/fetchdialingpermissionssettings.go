package operations

import (
"openapi/pkg/models/shared")
var FetchDialingPermissionsSettingsServers = []string{
	"https://voice.twilio.com",
}

type FetchDialingPermissionsSettingsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchDialingPermissionsSettingsRequest struct {
    ServerURL *string 
    Security FetchDialingPermissionsSettingsSecurity 
    
}

type FetchDialingPermissionsSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    VoiceV1DialingPermissionsDialingPermissionsSettings *shared.VoiceV1DialingPermissionsDialingPermissionsSettings 
    
}

