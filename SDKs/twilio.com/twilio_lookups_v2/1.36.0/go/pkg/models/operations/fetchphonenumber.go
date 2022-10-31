package operations

import (
	"openapi/pkg/models/shared"
)

var FetchPhoneNumberServers = []string{
	"https://lookups.twilio.com",
}

type FetchPhoneNumberPathParams struct {
	PhoneNumber string `pathParam:"style=simple,explode=false,name=PhoneNumber"`
}

type FetchPhoneNumberQueryParams struct {
	CountryCode *string `queryParam:"style=form,explode=true,name=CountryCode"`
	Fields      *string `queryParam:"style=form,explode=true,name=Fields"`
}

type FetchPhoneNumberSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type FetchPhoneNumberRequest struct {
	ServerURL   *string
	PathParams  FetchPhoneNumberPathParams
	QueryParams FetchPhoneNumberQueryParams
	Security    FetchPhoneNumberSecurity
}

type FetchPhoneNumberResponse struct {
	ContentType          string
	StatusCode           int64
	LookupsV2PhoneNumber *shared.LookupsV2PhoneNumber
}
