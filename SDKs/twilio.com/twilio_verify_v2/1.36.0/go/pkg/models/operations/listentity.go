package operations

import (
"openapi/pkg/models/shared")
var ListEntityServers = []string{
	"https://verify.twilio.com",
}

type ListEntityPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListEntityQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListEntitySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListEntityRequest struct {
    ServerURL *string 
    PathParams ListEntityPathParams 
    QueryParams ListEntityQueryParams 
    Security ListEntitySecurity 
    
}

type ListEntityListEntityResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListEntityListEntityResponse struct {
    Entities []shared.VerifyV2ServiceEntity `json:"entities,omitempty"`
    Meta *ListEntityListEntityResponseMeta `json:"meta,omitempty"`
    
}

type ListEntityResponse struct {
    ContentType string 
    ListEntityResponse *ListEntityListEntityResponse 
    StatusCode int64 
    
}

