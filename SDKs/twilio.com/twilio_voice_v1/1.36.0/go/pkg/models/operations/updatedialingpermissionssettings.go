package operations

import (
	"openapi/pkg/models/shared"
)

var UpdateDialingPermissionsSettingsServers = []string{
	"https://voice.twilio.com",
}

type UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest struct {
	DialingPermissionsInheritance *bool `form:"name=DialingPermissionsInheritance"`
}

type UpdateDialingPermissionsSettingsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type UpdateDialingPermissionsSettingsRequest struct {
	ServerURL *string
	Request   *UpdateDialingPermissionsSettingsUpdateDialingPermissionsSettingsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  UpdateDialingPermissionsSettingsSecurity
}

type UpdateDialingPermissionsSettingsResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	VoiceV1DialingPermissionsDialingPermissionsSettings *shared.VoiceV1DialingPermissionsDialingPermissionsSettings
}
