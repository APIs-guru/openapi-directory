package operations

import (
	"openapi/pkg/models/shared"
)

var FetchVoiceCountryServerList = []string{
	"https://pricing.twilio.com",
}

type FetchVoiceCountryPathParams struct {
	IsoCountry string `pathParam:"style=simple,explode=false,name=IsoCountry"`
}

type FetchVoiceCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVoiceCountryRequest struct {
	ServerURL  *string
	PathParams FetchVoiceCountryPathParams
	Security   FetchVoiceCountrySecurity
}

type FetchVoiceCountryResponse struct {
	ContentType                        string
	StatusCode                         int64
	PricingV1VoiceVoiceCountryInstance *shared.PricingV1VoiceVoiceCountryInstance
}
