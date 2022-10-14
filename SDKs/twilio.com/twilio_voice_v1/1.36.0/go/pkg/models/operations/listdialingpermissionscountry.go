package operations

import (
	"openapi/pkg/models/shared"
)

var ListDialingPermissionsCountryServers = []string{
	"https://voice.twilio.com",
}

type ListDialingPermissionsCountryQueryParams struct {
	Continent                       *string `queryParam:"style=form,explode=true,name=Continent"`
	CountryCode                     *string `queryParam:"style=form,explode=true,name=CountryCode"`
	HighRiskSpecialNumbersEnabled   *bool   `queryParam:"style=form,explode=true,name=HighRiskSpecialNumbersEnabled"`
	HighRiskTollfraudNumbersEnabled *bool   `queryParam:"style=form,explode=true,name=HighRiskTollfraudNumbersEnabled"`
	IsoCode                         *string `queryParam:"style=form,explode=true,name=IsoCode"`
	LowRiskNumbersEnabled           *bool   `queryParam:"style=form,explode=true,name=LowRiskNumbersEnabled"`
	PageSize                        *int64  `queryParam:"style=form,explode=true,name=PageSize"`
}

type ListDialingPermissionsCountrySecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListDialingPermissionsCountryRequest struct {
	ServerURL   *string
	QueryParams ListDialingPermissionsCountryQueryParams
	Security    ListDialingPermissionsCountrySecurity
}

type ListDialingPermissionsCountry200ApplicationJSONMeta struct {
	FirstPageURL    *string `json:"first_page_url,omitempty"`
	Key             *string `json:"key,omitempty"`
	NextPageURL     *string `json:"next_page_url,omitempty"`
	Page            *int64  `json:"page,omitempty"`
	PageSize        *int64  `json:"page_size,omitempty"`
	PreviousPageURL *string `json:"previous_page_url,omitempty"`
	URL             *string `json:"url,omitempty"`
}

type ListDialingPermissionsCountry200ApplicationJSONListDialingPermissionsCountryResponse struct {
	Content []shared.VoiceV1DialingPermissionsDialingPermissionsCountry `json:"content,omitempty"`
	Meta    *ListDialingPermissionsCountry200ApplicationJSONMeta        `json:"meta,omitempty"`
}

type ListDialingPermissionsCountryResponse struct {
	ContentType                           string
	ListDialingPermissionsCountryResponse *ListDialingPermissionsCountry200ApplicationJSONListDialingPermissionsCountryResponse
	StatusCode                            int64
}
