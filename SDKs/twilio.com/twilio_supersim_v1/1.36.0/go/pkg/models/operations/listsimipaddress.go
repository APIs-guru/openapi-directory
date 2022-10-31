package operations

import (
"openapi/pkg/models/shared")
var ListSimIPAddressServers = []string{
	"https://supersim.twilio.com",
}

type ListSimIPAddressPathParams struct {
    SimSid string `pathParam:"style=simple,explode=false,name=SimSid"`
    
}

type ListSimIPAddressQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSimIPAddressSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSimIPAddressRequest struct {
    ServerURL *string 
    PathParams ListSimIPAddressPathParams 
    QueryParams ListSimIPAddressQueryParams 
    Security ListSimIPAddressSecurity 
    
}

type ListSimIPAddressListSimIPAddressResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSimIPAddressListSimIPAddressResponse struct {
    IPAddresses []shared.SupersimV1SimSimIPAddress `json:"ip_addresses,omitempty"`
    Meta *ListSimIPAddressListSimIPAddressResponseMeta `json:"meta,omitempty"`
    
}

type ListSimIPAddressResponse struct {
    ContentType string 
    ListSimIPAddressResponse *ListSimIPAddressListSimIPAddressResponse 
    StatusCode int64 
    
}

