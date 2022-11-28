package operations

import (
	"openapi/pkg/models/shared"
)

var FetchMessagingCountryServerList = []string{
	"https://pricing.twilio.com",
}

type FetchMessagingCountryPathParams struct {
	IsoCountry string `pathParam:"style=simple,explode=false,name=IsoCountry"`
}

type FetchMessagingCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchMessagingCountryRequest struct {
	ServerURL  *string
	PathParams FetchMessagingCountryPathParams
	Security   FetchMessagingCountrySecurity
}

type FetchMessagingCountryResponse struct {
	ContentType                                string
	StatusCode                                 int64
	PricingV1MessagingMessagingCountryInstance *shared.PricingV1MessagingMessagingCountryInstance
}
