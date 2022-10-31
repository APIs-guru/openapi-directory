package operations

import (
"openapi/pkg/models/shared")
var ListVariableServers = []string{
	"https://serverless.twilio.com",
}

type ListVariablePathParams struct {
    EnvironmentSid string `pathParam:"style=simple,explode=false,name=EnvironmentSid"`
    ServiceSid string `pathParam:"style=simple,explode=false,name=ServiceSid"`
    
}

type ListVariableQueryParams struct {
    PageSize *int64 `queryParam:"style=form,explode=true,name=PageSize"`
    
}

type ListVariableSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type ListVariableRequest struct {
    ServerURL *string 
    PathParams ListVariablePathParams 
    QueryParams ListVariableQueryParams 
    Security ListVariableSecurity 
    
}

type ListVariableListVariableResponseMeta struct {
    FirstPageURL *string `json:"first_page_url,omitempty"`
    Key *string `json:"key,omitempty"`
    NextPageURL *string `json:"next_page_url,omitempty"`
    Page *int64 `json:"page,omitempty"`
    PageSize *int64 `json:"page_size,omitempty"`
    PreviousPageURL *string `json:"previous_page_url,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type ListVariableListVariableResponse struct {
    Meta *ListVariableListVariableResponseMeta `json:"meta,omitempty"`
    Variables []shared.ServerlessV1ServiceEnvironmentVariable `json:"variables,omitempty"`
    
}

type ListVariableResponse struct {
    ContentType string 
    ListVariableResponse *ListVariableListVariableResponse 
    StatusCode int64 
    
}

