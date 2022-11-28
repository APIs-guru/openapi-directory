package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrunkingCountryServerList = []string{
	"https://pricing.twilio.com",
}

type FetchTrunkingCountryPathParams struct {
	IsoCountry string `pathParam:"style=simple,explode=false,name=IsoCountry"`
}

type FetchTrunkingCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrunkingCountryRequest struct {
	ServerURL  *string
	PathParams FetchTrunkingCountryPathParams
	Security   FetchTrunkingCountrySecurity
}

type FetchTrunkingCountryResponse struct {
	ContentType                      string
	StatusCode                       int64
	PricingV2TrunkingCountryInstance *shared.PricingV2TrunkingCountryInstance
}
