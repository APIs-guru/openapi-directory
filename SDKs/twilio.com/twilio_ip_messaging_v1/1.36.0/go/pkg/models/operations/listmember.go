package operations

import (
"openapi/pkg/models/shared")
var ListMemberServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListMemberPathParams struct {
    ChannelSid string `pathParam:"style=simple,explode=false,name=ChannelSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListMemberQueryParams struct {
    Identity []string `queryParam:"style=form,explode=true,name=Identity"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListMemberSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListMemberRequest struct {
    ServerURL *string 
    PathParams ListMemberPathParams 
    QueryParams ListMemberQueryParams 
    Security ListMemberSecurity 
    
}

type ListMemberListMemberResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListMemberListMemberResponse struct {
    Members []shared.IPMessagingV1ServiceChannelMember `json:"members,omitempty"`
    Meta *ListMemberListMemberResponseMeta `json:"meta,omitempty"`
    
}

type ListMemberResponse struct {
    ContentType string 
    ListMemberResponse *ListMemberListMemberResponse 
    StatusCode int64 
    
}

