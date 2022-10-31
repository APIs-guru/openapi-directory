package operations

import (
"openapi/pkg/models/shared")
var ListConferenceServers = []string{
	"https://insights.twilio.com",
}

type ListConferenceQueryParams struct {
    ConferenceSid *string `queryParam:"style=form,explode=true,name=ConferenceSid"`
    CreatedAfter *string `queryParam:"style=form,explode=true,name=CreatedAfter"`
    CreatedBefore *string `queryParam:"style=form,explode=true,name=CreatedBefore"`
    DetectedIssues *string `queryParam:"style=form,explode=true,name=DetectedIssues"`
    EndReason *string `queryParam:"style=form,explode=true,name=EndReason"`
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    MixerRegion *string `queryParam:"style=form,explode=true,name=MixerRegion"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Status *string `queryParam:"style=form,explode=true,name=Status"`
    Subaccount *string `queryParam:"style=form,explode=true,name=Subaccount"`
    Tags *string `queryParam:"style=form,explode=true,name=Tags"`
    
}

type ListConferenceSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListConferenceRequest struct {
    ServerURL *string 
    QueryParams ListConferenceQueryParams 
    Security ListConferenceSecurity 
    
}

type ListConferenceListConferenceResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListConferenceListConferenceResponse struct {
    Conferences []shared.InsightsV1Conference `json:"conferences,omitempty"`
    Meta *ListConferenceListConferenceResponseMeta `json:"meta,omitempty"`
    
}

type ListConferenceResponse struct {
    ContentType string 
    ListConferenceResponse *ListConferenceListConferenceResponse 
    StatusCode int64 
    
}

