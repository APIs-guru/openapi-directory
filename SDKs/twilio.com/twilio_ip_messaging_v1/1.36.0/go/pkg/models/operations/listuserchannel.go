package operations

import (
"openapi/pkg/models/shared")
var ListUserChannelServers = []string{
	"https://ip-messaging.twilio.com",
}

type ListUserChannelPathParams struct {
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    UserSid string `pathParam:"style=simple,explode=false,name=UserSid"`
    
}

type ListUserChannelQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListUserChannelSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUserChannelRequest struct {
    ServerURL *string 
    PathParams ListUserChannelPathParams 
    QueryParams ListUserChannelQueryParams 
    Security ListUserChannelSecurity 
    
}

type ListUserChannelListUserChannelResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListUserChannelListUserChannelResponse struct {
    Channels []shared.IPMessagingV1ServiceUserUserChannel `json:"channels,omitempty"`
    Meta *ListUserChannelListUserChannelResponseMeta `json:"meta,omitempty"`
    
}

type ListUserChannelResponse struct {
    ContentType string 
    ListUserChannelResponse *ListUserChannelListUserChannelResponse 
    StatusCode int64 
    
}

