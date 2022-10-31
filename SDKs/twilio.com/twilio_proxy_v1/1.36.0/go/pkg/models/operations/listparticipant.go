package operations

import (
"openapi/pkg/models/shared")
var ListParticipantServers = []string{
	"https://proxy.twilio.com",
}

type ListParticipantPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    SessionSid string `pathParam:"style=simple,explode=false,name=SessionSid"`
    
}

type ListParticipantQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListParticipantSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListParticipantRequest struct {
    ServerURL *string 
    PathParams ListParticipantPathParams 
    QueryParams ListParticipantQueryParams 
    Security ListParticipantSecurity 
    
}

type ListParticipantListParticipantResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListParticipantListParticipantResponse struct {
    Meta *ListParticipantListParticipantResponseMeta `json:"meta,omitempty"`
    Participants []shared.ProxyV1ServiceSessionParticipant `json:"participants,omitempty"`
    
}

type ListParticipantResponse struct {
    ContentType string 
    ListParticipantResponse *ListParticipantListParticipantResponse 
    StatusCode int64 
    
}

