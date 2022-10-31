package operations

import (
"openapi/pkg/models/shared")
var ListSimServers = []string{
	"https://supersim.twilio.com",
}

type ListSimQueryParams struct {
    Fleet *string `queryParam:"style=form,explode=true,name=Fleet"`
    Iccid *string `queryParam:"style=form,explode=true,name=Iccid"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Status *shared.SimEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListSimSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSimRequest struct {
    ServerURL *string 
    QueryParams ListSimQueryParams 
    Security ListSimSecurity 
    
}

type ListSimListSimResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSimListSimResponse struct {
    Meta *ListSimListSimResponseMeta `json:"meta,omitempty"`
    Sims []shared.SupersimV1Sim `json:"sims,omitempty"`
    
}

type ListSimResponse struct {
    ContentType string 
    ListSimResponse *ListSimListSimResponse 
    StatusCode int64 
    
}

