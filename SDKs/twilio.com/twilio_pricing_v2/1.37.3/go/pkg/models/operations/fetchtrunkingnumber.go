package operations

import (
	"openapi/pkg/models/shared"
)

var FetchTrunkingNumberServerList = []string{
	"https://pricing.twilio.com",
}

type FetchTrunkingNumberPathParams struct {
	DestinationNumber string `pathParam:"style=simple,explode=false,name=DestinationNumber"`
}

type FetchTrunkingNumberQueryParams struct {
	OriginationNumber *string `queryParam:"style=form,explode=true,name=OriginationNumber"`
}

type FetchTrunkingNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchTrunkingNumberRequest struct {
	ServerURL   *string
	PathParams  FetchTrunkingNumberPathParams
	QueryParams FetchTrunkingNumberQueryParams
	Security    FetchTrunkingNumberSecurity
}

type FetchTrunkingNumberResponse struct {
	ContentType             string
	StatusCode              int64
	PricingV2TrunkingNumber *shared.PricingV2TrunkingNumber
}
