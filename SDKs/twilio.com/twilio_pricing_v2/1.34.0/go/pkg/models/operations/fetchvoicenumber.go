package operations

import (
	"openapi/pkg/models/shared"
)

var FetchVoiceNumberServers = []string{
	"https://pricing.twilio.com",
}

type FetchVoiceNumberPathParams struct {
	DestinationNumber string `pathParam:"style=simple,explode=false,name=DestinationNumber"`
}

type FetchVoiceNumberQueryParams struct {
	OriginationNumber *string `queryParam:"style=form,explode=true,name=OriginationNumber"`
}

type FetchVoiceNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchVoiceNumberRequest struct {
	ServerURL   *string
	PathParams  FetchVoiceNumberPathParams
	QueryParams FetchVoiceNumberQueryParams
	Security    FetchVoiceNumberSecurity
}

type FetchVoiceNumberResponse struct {
	ContentType               string
	StatusCode                int64
	PricingV2VoiceVoiceNumber *shared.PricingV2VoiceVoiceNumber
}
