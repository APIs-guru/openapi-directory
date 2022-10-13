package operations

import (
	"openapi/pkg/models/shared"
)

var CreateCompositionSettingsServers = []string{
	"https://video.twilio.com",
}

type CreateCompositionSettingsRequestBodyCreateCompositionSettingsRequest struct {
	AwsCredentialsSid *string `form:"name=AwsCredentialsSid"`
	AwsS3URL          *string `form:"name=AwsS3Url"`
	AwsStorageEnabled *bool   `form:"name=AwsStorageEnabled"`
	EncryptionEnabled *bool   `form:"name=EncryptionEnabled"`
	EncryptionKeySid  *string `form:"name=EncryptionKeySid"`
	FriendlyName      string  `form:"name=FriendlyName"`
}

type CreateCompositionSettingsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type CreateCompositionSettingsRequest struct {
	ServerURL *string
	Request   *CreateCompositionSettingsRequestBodyCreateCompositionSettingsRequest `request:"mediaType=application/x-www-form-urlencoded"`
	Security  CreateCompositionSettingsSecurity
}

type CreateCompositionSettingsResponse struct {
	ContentType                string
	StatusCode                 int64
	VideoV1CompositionSettings *shared.VideoV1CompositionSettings
}
