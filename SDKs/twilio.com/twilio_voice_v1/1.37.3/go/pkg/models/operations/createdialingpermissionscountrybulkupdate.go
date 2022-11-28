package operations

import (
	"openapi/pkg/models/shared"
)

var CreateDialingPermissionsCountryBulkUpdateServerList = []string{
	"https://voice.twilio.com",
}

type CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest struct {
	UpdateRequest string `form:"name=UpdateRequest"`
}

type CreateDialingPermissionsCountryBulkUpdateSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateDialingPermissionsCountryBulkUpdateRequest struct {
	ServerURL *string
	Request   *CreateDialingPermissionsCountryBulkUpdateCreateDialingPermissionsCountryBulkUpdateRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateDialingPermissionsCountryBulkUpdateSecurity
}

type CreateDialingPermissionsCountryBulkUpdateResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate *shared.VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate
}
