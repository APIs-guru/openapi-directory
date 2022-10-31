package operations

import (
"openapi/pkg/models/shared")
var ListUnderstandQueryServers = []string{
	"https://preview.twilio.com",
}

type ListUnderstandQueryPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    
}

type ListUnderstandQueryQueryParams struct {
    Language *string `queryParam:"style=form,explode=true,name=Language"`
    ModelBuild *string `queryParam:"style=form,explode=true,name=ModelBuild"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    Status *string `queryParam:"style=form,explode=true,name=Status"`
    
}

type ListUnderstandQuerySecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListUnderstandQueryRequest struct {
    ServerURL *string 
    PathParams ListUnderstandQueryPathParams 
    QueryParams ListUnderstandQueryQueryParams 
    Security ListUnderstandQuerySecurity 
    
}

type ListUnderstandQueryListUnderstandQueryResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListUnderstandQueryListUnderstandQueryResponse struct {
    Meta *ListUnderstandQueryListUnderstandQueryResponseMeta `json:"meta,omitempty"`
    Queries []shared.PreviewUnderstandAssistantQuery `json:"queries,omitempty"`
    
}

type ListUnderstandQueryResponse struct {
    ContentType string 
    ListUnderstandQueryResponse *ListUnderstandQueryListUnderstandQueryResponse 
    StatusCode int64 
    
}

