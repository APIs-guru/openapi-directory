package operations

import (
"openapi/pkg/models/shared")
var ListWirelessSimServers = []string{
	"https://preview.twilio.com",
}

type ListWirelessSimQueryParams struct {
    EID *string `queryParam:"style=form,explode=true,name=EId"`
    Iccid *string `queryParam:"style=form,explode=true,name=Iccid"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    RatePlan *string `queryParam:"style=form,explode=true,name=RatePlan"`
    SimRegistrationCode *string `queryParam:"style=form,explode=true,name=SimRegistrationCode"`
    Status *string `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListWirelessSimSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListWirelessSimRequest struct {
    ServerURL *string 
    QueryParams ListWirelessSimQueryParams 
    Security ListWirelessSimSecurity 
    
}

type ListWirelessSimListWirelessSimResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListWirelessSimListWirelessSimResponse struct {
    Meta *ListWirelessSimListWirelessSimResponseMeta `json:"meta,omitempty"`
    Sims []shared.PreviewWirelessSim `json:"sims,omitempty"`
    
}

type ListWirelessSimResponse struct {
    ContentType string 
    ListWirelessSimResponse *ListWirelessSimListWirelessSimResponse 
    StatusCode int64 
    
}

