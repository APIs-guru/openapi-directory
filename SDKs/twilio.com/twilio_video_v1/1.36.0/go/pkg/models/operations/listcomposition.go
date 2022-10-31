package operations

import (
"time"
"openapi/pkg/models/shared")
var ListCompositionServers = []string{
	"https://video.twilio.com",
}

type ListCompositionQueryParams struct {
    DateCreatedAfter *time.Time `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
    DateCreatedBefore *time.Time `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    RoomSid *string `queryParam:"style=form,explode=true,name=RoomSid"`
    Status *shared.CompositionEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListCompositionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCompositionRequest struct {
    ServerURL *string 
    QueryParams ListCompositionQueryParams 
    Security ListCompositionSecurity 
    
}

type ListCompositionListCompositionResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCompositionListCompositionResponse struct {
    Compositions []shared.VideoV1Composition `json:"compositions,omitempty"`
    Meta *ListCompositionListCompositionResponseMeta `json:"meta,omitempty"`
    
}

type ListCompositionResponse struct {
    ContentType string 
    ListCompositionResponse *ListCompositionListCompositionResponse 
    StatusCode int64 
    
}

