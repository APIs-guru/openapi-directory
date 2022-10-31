package operations

import (
"openapi/pkg/models/shared")
var CreateRecordingSettingsServers = []string{
	"https://video.twilio.com",
}

type CreateRecordingSettingsCreateRecordingSettingsRequest struct {
    AwsCredentialsSid *string `form:"name=AwsCredentialsSid"`
    AwsS3URL *string `form:"name=AwsS3Url"`
    AwsStorageEnabled *bool `form:"name=AwsStorageEnabled"`
    EncryptionEnabled *bool `form:"name=EncryptionEnabled"`
    EncryptionKeySid *string `form:"name=EncryptionKeySid"`
    FriendlyName string `form:"name=FriendlyName"`
    
}

type CreateRecordingSettingsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type CreateRecordingSettingsRequest struct {
    ServerURL *string 
    Request *CreateRecordingSettingsCreateRecordingSettingsRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Security CreateRecordingSettingsSecurity 
    
}

type CreateRecordingSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1RecordingSettings *shared.VideoV1RecordingSettings 
    
}

