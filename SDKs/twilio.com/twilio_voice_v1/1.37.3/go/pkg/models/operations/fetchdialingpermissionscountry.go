package operations

import (
	"openapi/pkg/models/shared"
)

var FetchDialingPermissionsCountryServerList = []string{
	"https://voice.twilio.com",
}

type FetchDialingPermissionsCountryPathParams struct {
	IsoCode string `pathParam:"style=simple,explode=false,name=IsoCode"`
}

type FetchDialingPermissionsCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchDialingPermissionsCountryRequest struct {
	ServerURL  *string
	PathParams FetchDialingPermissionsCountryPathParams
	Security   FetchDialingPermissionsCountrySecurity
}

type FetchDialingPermissionsCountryResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	VoiceV1DialingPermissionsDialingPermissionsCountryInstance *shared.VoiceV1DialingPermissionsDialingPermissionsCountryInstance
}
