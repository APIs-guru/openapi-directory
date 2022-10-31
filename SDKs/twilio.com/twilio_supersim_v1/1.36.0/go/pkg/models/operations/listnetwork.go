package operations

import (
"openapi/pkg/models/shared")
var ListNetworkServers = []string{
	"https://supersim.twilio.com",
}

type ListNetworkQueryParams struct {
    IsoCountry *string `queryParam:"style=form,explode=true,name=IsoCountry"`
    Mcc *string `queryParam:"style=form,explode=true,name=Mcc"`
    Mnc *string `queryParam:"style=form,explode=true,name=Mnc"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListNetworkSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListNetworkRequest struct {
    ServerURL *string 
    QueryParams ListNetworkQueryParams 
    Security ListNetworkSecurity 
    
}

type ListNetworkListNetworkResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListNetworkListNetworkResponse struct {
    Meta *ListNetworkListNetworkResponseMeta `json:"meta,omitempty"`
    Networks []shared.SupersimV1Network `json:"networks,omitempty"`
    
}

type ListNetworkResponse struct {
    ContentType string 
    ListNetworkResponse *ListNetworkListNetworkResponse 
    StatusCode int64 
    
}

