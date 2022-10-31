package operations

import (
"time"
"openapi/pkg/models/shared")
var ListCompositionHookServers = []string{
	"https://video.twilio.com",
}

type ListCompositionHookQueryParams struct {
    DateCreatedAfter *time.Time `queryParam:"style=form,explode=true,name=DateCreatedAfter"`
    DateCreatedBefore *time.Time `queryParam:"style=form,explode=true,name=DateCreatedBefore"`
    Enabled *bool `queryParam:"style=form,explode=true,name=Enabled"`
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListCompositionHookSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListCompositionHookRequest struct {
    ServerURL *string 
    QueryParams ListCompositionHookQueryParams 
    Security ListCompositionHookSecurity 
    
}

type ListCompositionHookListCompositionHookResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListCompositionHookListCompositionHookResponse struct {
    CompositionHooks []shared.VideoV1CompositionHook `json:"composition_hooks,omitempty"`
    Meta *ListCompositionHookListCompositionHookResponseMeta `json:"meta,omitempty"`
    
}

type ListCompositionHookResponse struct {
    ContentType string 
    ListCompositionHookResponse *ListCompositionHookListCompositionHookResponse 
    StatusCode int64 
    
}

