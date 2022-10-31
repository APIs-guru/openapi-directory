package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPhoneNumberCountryServers = []string{
	"https://pricing.twilio.com",
}

type FetchPhoneNumberCountryPathParams struct {
	IsoCountry string `pathParam:"style=simple,explode=false,name=IsoCountry"`
}

type FetchPhoneNumberCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPhoneNumberCountryRequest struct {
	ServerURL  *string
	PathParams FetchPhoneNumberCountryPathParams
	Security   FetchPhoneNumberCountrySecurity
}

type FetchPhoneNumberCountryResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	PricingV1PhoneNumberPhoneNumberCountryInstance *shared.PricingV1PhoneNumberPhoneNumberCountryInstance
}
