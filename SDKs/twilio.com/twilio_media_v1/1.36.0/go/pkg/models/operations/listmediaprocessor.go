package operations

import (
"openapi/pkg/models/shared")
var ListMediaProcessorServers = []string{
	"https://media.twilio.com",
}

type ListMediaProcessorQueryParams struct {
    Order *shared.MediaProcessorEnumOrderEnum `queryParam:"style=form,explode=true,name=Order"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Status *shared.MediaProcessorEnumStatusEnum `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListMediaProcessorSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListMediaProcessorRequest struct {
    ServerURL *string 
    QueryParams ListMediaProcessorQueryParams 
    Security ListMediaProcessorSecurity 
    
}

type ListMediaProcessorListMediaProcessorResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListMediaProcessorListMediaProcessorResponse struct {
    MediaProcessors []shared.MediaV1MediaProcessor `json:"media_processors,omitempty"`
    Meta *ListMediaProcessorListMediaProcessorResponseMeta `json:"meta,omitempty"`
    
}

type ListMediaProcessorResponse struct {
    ContentType string 
    ListMediaProcessorResponse *ListMediaProcessorListMediaProcessorResponse 
    StatusCode int64 
    
}

