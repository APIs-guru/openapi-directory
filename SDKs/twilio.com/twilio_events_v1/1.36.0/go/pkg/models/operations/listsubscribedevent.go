package operations

import (
"openapi/pkg/models/shared")
var ListSubscribedEventServers = []string{
	"https://events.twilio.com",
}

type ListSubscribedEventPathParams struct {
    SubscriptionSid string `pathParam:"style=simple,explode=false,name=SubscriptionSid"`
    
}

type ListSubscribedEventQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListSubscribedEventSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListSubscribedEventRequest struct {
    ServerURL *string 
    PathParams ListSubscribedEventPathParams 
    QueryParams ListSubscribedEventQueryParams 
    Security ListSubscribedEventSecurity 
    
}

type ListSubscribedEventListSubscribedEventResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListSubscribedEventListSubscribedEventResponse struct {
    Meta *ListSubscribedEventListSubscribedEventResponseMeta `json:"meta,omitempty"`
    Types []shared.EventsV1SubscriptionSubscribedEvent `json:"types,omitempty"`
    
}

type ListSubscribedEventResponse struct {
    ContentType string 
    ListSubscribedEventResponse *ListSubscribedEventListSubscribedEventResponse 
    StatusCode int64 
    
}

