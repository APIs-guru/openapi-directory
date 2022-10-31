package operations

import (
"openapi/pkg/models/shared")
var FetchRecordingSettingsServers = []string{
	"https://video.twilio.com",
}

type FetchRecordingSettingsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchRecordingSettingsRequest struct {
    ServerURL *string 
    Security FetchRecordingSettingsSecurity 
    
}

type FetchRecordingSettingsResponse struct {
    ContentType string 
    StatusCode int64 
    VideoV1RecordingSettings *shared.VideoV1RecordingSettings 
    
}

