package operations

import (
	"openapi/pkg/models/shared"
)

var FetchCompositionSettingsServers = []string{
	"https://video.twilio.com",
}

type FetchCompositionSettingsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchCompositionSettingsRequest struct {
	ServerURL *string
	Security  FetchCompositionSettingsSecurity
}

type FetchCompositionSettingsResponse struct {
	ContentType                string
	StatusCode                 int64
	VideoV1CompositionSettings *shared.VideoV1CompositionSettings
}
