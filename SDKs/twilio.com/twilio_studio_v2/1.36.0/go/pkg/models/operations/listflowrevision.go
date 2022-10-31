package operations

import (
"openapi/pkg/models/shared")
var ListFlowRevisionServers = []string{
	"https://studio.twilio.com",
}

type ListFlowRevisionPathParams struct {
    Sid string `pathParam:"style=simple,explode=false,name=Sid"`
    
}

type ListFlowRevisionQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListFlowRevisionSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListFlowRevisionRequest struct {
    ServerURL *string 
    PathParams ListFlowRevisionPathParams 
    QueryParams ListFlowRevisionQueryParams 
    Security ListFlowRevisionSecurity 
    
}

type ListFlowRevisionListFlowRevisionResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListFlowRevisionListFlowRevisionResponse struct {
    Meta *ListFlowRevisionListFlowRevisionResponseMeta `json:"meta,omitempty"`
    Revisions []shared.StudioV2FlowFlowRevision `json:"revisions,omitempty"`
    
}

type ListFlowRevisionResponse struct {
    ContentType string 
    ListFlowRevisionResponse *ListFlowRevisionListFlowRevisionResponse 
    StatusCode int64 
    
}

