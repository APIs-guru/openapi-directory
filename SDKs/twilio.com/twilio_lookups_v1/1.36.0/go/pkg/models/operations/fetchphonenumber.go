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
	AddOns      []string               `queryParam:"style=form,explode=true,name=AddOns"`
	AddOnsData  map[string]interface{} `queryParam:"style=form,explode=true,name=AddOnsData"`
	CountryCode *string                `queryParam:"style=form,explode=true,name=CountryCode"`
	Type        []string               `queryParam:"style=form,explode=true,name=Type"`
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
	LookupsV1PhoneNumber *shared.LookupsV1PhoneNumber
}
