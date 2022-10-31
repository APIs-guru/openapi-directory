package operations

import (
"openapi/pkg/models/shared")
var ListModelBuildServers = []string{
	"https://autopilot.twilio.com",
}

type ListModelBuildPathParams struct {
    AssistantSid string `pathParam:"style=simple,explode=false,name=AssistantSid"`
    
}

type ListModelBuildQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListModelBuildSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListModelBuildRequest struct {
    ServerURL *string 
    PathParams ListModelBuildPathParams 
    QueryParams ListModelBuildQueryParams 
    Security ListModelBuildSecurity 
    
}

type ListModelBuildListModelBuildResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListModelBuildListModelBuildResponse struct {
    Meta *ListModelBuildListModelBuildResponseMeta `json:"meta,omitempty"`
    ModelBuilds []shared.AutopilotV1AssistantModelBuild `json:"model_builds,omitempty"`
    
}

type ListModelBuildResponse struct {
    ContentType string 
    ListModelBuildResponse *ListModelBuildListModelBuildResponse 
    StatusCode int64 
    
}

