package operations

import (
	"openapi/pkg/models/shared"
)

var FetchAvailablePhoneNumberCountryServerList = []string{
	"https://api.twilio.com",
}

type FetchAvailablePhoneNumberCountryPathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CountryCode string `pathParam:"style=simple,explode=false,name=CountryCode"`
}

type FetchAvailablePhoneNumberCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchAvailablePhoneNumberCountryRequest struct {
	ServerURL  *string
	PathParams FetchAvailablePhoneNumberCountryPathParams
	Security   FetchAvailablePhoneNumberCountrySecurity
}

type FetchAvailablePhoneNumberCountryResponse struct {
	ContentType                                string
	StatusCode                                 int64
	APIV2010AccountAvailablePhoneNumberCountry *shared.APIV2010AccountAvailablePhoneNumberCountry
}
