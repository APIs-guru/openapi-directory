package operations

import (
"openapi/pkg/models/shared")
var ListAvailablePhoneNumberSharedCostServers = []string{
	"https://api.twilio.com",
}

type ListAvailablePhoneNumberSharedCostPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    CountryCode string `pathParam:"style=simple,explode=false,name=CountryCode"`
    
}

type ListAvailablePhoneNumberSharedCostQueryParams struct {
    AreaCode *int64 `queryParam:"style=form,explode=true,name=AreaCode"`
    Beta *bool `queryParam:"style=form,explode=true,name=Beta"`
    Contains *string `queryParam:"style=form,explode=true,name=Contains"`
    Distance *int64 `queryParam:"style=form,explode=true,name=Distance"`
    ExcludeAllAddressRequired *bool `queryParam:"style=form,explode=true,name=ExcludeAllAddressRequired"`
    ExcludeForeignAddressRequired *bool `queryParam:"style=form,explode=true,name=ExcludeForeignAddressRequired"`
    ExcludeLocalAddressRequired *bool `queryParam:"style=form,explode=true,name=ExcludeLocalAddressRequired"`
    FaxEnabled *bool `queryParam:"style=form,explode=true,name=FaxEnabled"`
    InLata *string `queryParam:"style=form,explode=true,name=InLata"`
    InLocality *string `queryParam:"style=form,explode=true,name=InLocality"`
    InPostalCode *string `queryParam:"style=form,explode=true,name=InPostalCode"`
    InRateCenter *string `queryParam:"style=form,explode=true,name=InRateCenter"`
    InRegion *string `queryParam:"style=form,explode=true,name=InRegion"`
    MmsEnabled *bool `queryParam:"style=form,explode=true,name=MmsEnabled"`
    NearLatLong *string `queryParam:"style=form,explode=true,name=NearLatLong"`
    NearNumber *string `queryParam:"style=form,explode=true,name=NearNumber"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    SmsEnabled *bool `queryParam:"style=form,explode=true,name=SmsEnabled"`
    VoiceEnabled *bool `queryParam:"style=form,explode=true,name=VoiceEnabled"`
    
}

type ListAvailablePhoneNumberSharedCostSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListAvailablePhoneNumberSharedCostRequest struct {
    ServerURL *string 
    PathParams ListAvailablePhoneNumberSharedCostPathParams 
    QueryParams ListAvailablePhoneNumberSharedCostQueryParams 
    Security ListAvailablePhoneNumberSharedCostSecurity 
    
}

type ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse struct {
    AvailablePhoneNumbers []shared.APIV2010AccountAvailablePhoneNumberCountryAvailablePhoneNumberSharedCost `json:"available_phone_numbers,omitempty"`
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListAvailablePhoneNumberSharedCostResponse struct {
    ContentType string 
    ListAvailablePhoneNumberSharedCostResponse *ListAvailablePhoneNumberSharedCostListAvailablePhoneNumberSharedCostResponse 
    StatusCode int64 
    
}

