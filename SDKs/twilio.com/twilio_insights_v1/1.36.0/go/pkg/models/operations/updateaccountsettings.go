package operations

import (
"openapi/pkg/models/shared")
var UpdateAccountSettingsServers = []string{
	"https://insights.twilio.com",
}

type UpdateAccountSettingsUpdateAccountSettingsRequest struct {
    AdvancedFeatures *bool `form:"name=AdvancedFeatures"`
    SubaccountSid *string `form:"name=SubaccountSid"`
    VoiceTrace *bool `form:"name=VoiceTrace"`
    
}

type UpdateAccountSettingsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type UpdateAccountSettingsRequest struct {
    ServerURL *string 
    Request *UpdateAccountSettingsUpdateAccountSettingsRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security UpdateAccountSettingsSecurity 
    
}

type UpdateAccountSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    InsightsV1AccountSettings *shared.InsightsV1AccountSettings 
    
}

