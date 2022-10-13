package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDialingPermissionsCountryBulkUpdateServers = []string{
	"https://voice.twilio.com",
}

type CreateDialingPermissionsCountryBulkUpdateRequestBodyCreateDialingPermissionsCountryBulkUpdateRequest struct {
	UpdateRequest string `form:"name=UpdateRequest"`
}

type CreateDialingPermissionsCountryBulkUpdateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDialingPermissionsCountryBulkUpdateRequest struct {
	ServerURL *string
	Request   *CreateDialingPermissionsCountryBulkUpdateRequestBodyCreateDialingPermissionsCountryBulkUpdateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateDialingPermissionsCountryBulkUpdateSecurity
}

type CreateDialingPermissionsCountryBulkUpdateResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate *shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate
}
