package operations

import (
	"openapi/pkg/models/shared"
)

var ListAvailablePhoneNumberMachineToMachineServers = []string{
	"https://api.twilio.com",
}

type ListAvailablePhoneNumberMachineToMachinePathParams struct {
	AccountSid  string `pathParam:"style=simple,explode=false,name=AccountSid"`
	CountryCode string `pathParam:"style=simple,explode=false,name=CountryCode"`
}

type ListAvailablePhoneNumberMachineToMachineQueryParams struct {
	AreaCode                      *int64  `queryParam:"style=form,explode=true,name=AreaCode"`
	Beta                          *bool   `queryParam:"style=form,explode=true,name=Beta"`
	Contains                      *string `queryParam:"style=form,explode=true,name=Contains"`
	Distance                      *int64  `queryParam:"style=form,explode=true,name=Distance"`
	ExcludeAllAddressRequired     *bool   `queryParam:"style=form,explode=true,name=ExcludeAllAddressRequired"`
	ExcludeForeignAddressRequired *bool   `queryParam:"style=form,explode=true,name=ExcludeForeignAddressRequired"`
	ExcludeLocalAddressRequired   *bool   `queryParam:"style=form,explode=true,name=ExcludeLocalAddressRequired"`
	FaxEnabled                    *bool   `queryParam:"style=form,explode=true,name=FaxEnabled"`
	InLata                        *string `queryParam:"style=form,explode=true,name=InLata"`
	InLocality                    *string `queryParam:"style=form,explode=true,name=InLocality"`
	InPostalCode                  *string `queryParam:"style=form,explode=true,name=InPostalCode"`
	InRateCenter                  *string `queryParam:"style=form,explode=true,name=InRateCenter"`
	InRegion                      *string `queryParam:"style=form,explode=true,name=InRegion"`
	MmsEnabled                    *bool   `queryParam:"style=form,explode=true,name=MmsEnabled"`
	NearLatLong                   *string `queryParam:"style=form,explode=true,name=NearLatLong"`
	NearNumber                    *string `queryParam:"style=form,explode=true,name=NearNumber"`
	PageSize                      *int64  `queryParam:"style=form,explode=true,name=PageSize"`
	SmsEnabled                    *bool   `queryParam:"style=form,explode=true,name=SmsEnabled"`
	VoiceEnabled                  *bool   `queryParam:"style=form,explode=true,name=VoiceEnabled"`
}

type ListAvailablePhoneNumberMachineToMachineSecurity struct {
	AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
}

type ListAvailablePhoneNumberMachineToMachineRequest struct {
	ServerURL   *string
	PathParams  ListAvailablePhoneNumberMachineToMachinePathParams
	QueryParams ListAvailablePhoneNumberMachineToMachineQueryParams
	Security    ListAvailablePhoneNumberMachineToMachineSecurity
}

type ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse struct {
	AvailablePhoneNumbers []shared.APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberMachineToMachine `json:"available_phone_numbers,omitempty"`
	End                   *int64                                                                                  `json:"end,omitempty"`
	FirstPageURI          *string                                                                                 `json:"first_page_uri,omitempty"`
	NextPageURI           *string                                                                                 `json:"next_page_uri,omitempty"`
	Page                  *int64                                                                                  `json:"page,omitempty"`
	PageSize              *int64                                                                                  `json:"page_size,omitempty"`
	PreviousPageURI       *string                                                                                 `json:"previous_page_uri,omitempty"`
	Start                 *int64                                                                                  `json:"start,omitempty"`
	URI                   *string                                                                                 `json:"uri,omitempty"`
}

type ListAvailablePhoneNumberMachineToMachineResponse struct {
	ContentType                                      string
	ListAvailablePhoneNumberMachineToMachineResponse *ListAvailablePhoneNumberMachineToMachineListAvailablePhoneNumberMachineToMachineResponse
	StatusCode                                       int64
}
