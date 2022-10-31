package operations

import (
"openapi/pkg/models/shared")
var ListIncomingPhoneNumberLocalServers = []string{
	"https://api.twilio.com",
}

type ListIncomingPhoneNumberLocalPathParams struct {
    AccountSid string `pathParam:"style=simple,explode=false,name=AccountSid"`
    
}

type ListIncomingPhoneNumberLocalQueryParams struct {
    Beta *bool `queryParam:"style=form,explode=true,name=Beta"`
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    Origin *string `queryParam:"style=form,explode=true,name=Origin"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    PhoneNumber *string `queryParam:"style=form,explode=true,name=PhoneNumber"`
    
}

type ListIncomingPhoneNumberLocalSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListIncomingPhoneNumberLocalRequest struct {
    ServerURL *string 
    PathParams ListIncomingPhoneNumberLocalPathParams 
    QueryParams ListIncomingPhoneNumberLocalQueryParams 
    Security ListIncomingPhoneNumberLocalSecurity 
    
}

type ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse struct {
    End *int64 `json:"end,omitempty"`
    FirstPageURI *string `json:"first_page_uri,omitempty"`
    IncomingPhoneNumbers []shared.APIV2010AccountIncomingPhoneNumberIncomingPhoneNumberLocal `json:"incoming_phone_numbers,omitempty"`
    NextPageURI *string `json:"next_page_uri,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURI *string `json:"previous_page_uri,omitempty"`
    Start *int64 `json:"start,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type ListIncomingPhoneNumberLocalResponse struct {
    ContentType string 
    ListIncomingPhoneNumberLocalResponse *ListIncomingPhoneNumberLocalListIncomingPhoneNumberLocalResponse 
    StatusCode int64 
    
}

