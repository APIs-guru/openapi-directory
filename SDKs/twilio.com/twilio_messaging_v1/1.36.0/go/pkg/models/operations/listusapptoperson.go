package operations

import (
"openapi/pkg/models/shared")
var ListUsAppToPersonServers = []string{
	"https://messaging.twilio.com",
}

type ListUsAppToPersonPathParams struct {
    MessagingServiceSid string `pathParam:"style=simple,explode=false,name=MessagingServiceSid"`
    
}

type ListUsAppToPersonQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListUsAppToPersonSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUsAppToPersonRequest struct {
    ServerURL *string 
    PathParams ListUsAppToPersonPathParams 
    QueryParams ListUsAppToPersonQueryParams 
    Security ListUsAppToPersonSecurity 
    
}

type ListUsAppToPersonListUsAppToPersonResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListUsAppToPersonListUsAppToPersonResponse struct {
    Compliance []shared.MessagingV1ServiceUsAppToPerson `json:"compliance,omitempty"`
    Meta *ListUsAppToPersonListUsAppToPersonResponseMeta `json:"meta,omitempty"`
    
}

type ListUsAppToPersonResponse struct {
    ContentType string 
    ListUsAppToPersonResponse *ListUsAppToPersonListUsAppToPersonResponse 
    StatusCode int64 
    
}

