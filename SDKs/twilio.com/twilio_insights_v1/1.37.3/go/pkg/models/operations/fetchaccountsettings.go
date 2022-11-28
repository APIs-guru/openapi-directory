package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAccountSettingsServerList = []string{
	"https://insights.twilio.com",
}

type FetchAccountSettingsQueryParams struct {
	SubaccountSid *string `queryParam:"style=form,explode=true,name=SubaccountSid"`
}

type FetchAccountSettingsSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAccountSettingsRequest struct {
	ServerURL   *string
	QueryParams FetchAccountSettingsQueryParams
	Security    FetchAccountSettingsSecurity
}

type FetchAccountSettingsResponse struct {
	ContentType               string
	StatusCode                int64
	InsightsV1AccountSettings *shared.InsightsV1AccountSettings
}
