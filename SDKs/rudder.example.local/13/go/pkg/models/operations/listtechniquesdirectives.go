package operations

import (
"openapi/pkg/models/shared")

type ListTechniquesDirectivesPathParams struct {
    TechniqueName string `pathParam:"style=simple,explode=false,name=techniqueName"`
    
}

type ListTechniquesDirectivesRequest struct {
    PathParams ListTechniquesDirectivesPathParams 
    
}


type ListTechniquesDirectives200ApplicationJSONActionEnum string

const (
    ListTechniquesDirectives200ApplicationJSONActionEnumListTechniquesDirectives ListTechniquesDirectives200ApplicationJSONActionEnum = "listTechniquesDirectives"
)


type ListTechniquesDirectives200ApplicationJSONData struct {
    Directives []shared.Directive `json:"directives"`
    
}


type ListTechniquesDirectives200ApplicationJSONResultEnum string

const (
    ListTechniquesDirectives200ApplicationJSONResultEnumSuccess ListTechniquesDirectives200ApplicationJSONResultEnum = "success"
ListTechniquesDirectives200ApplicationJSONResultEnumError ListTechniquesDirectives200ApplicationJSONResultEnum = "error"
)


type ListTechniquesDirectives200ApplicationJSON struct {
    Action ListTechniquesDirectives200ApplicationJSONActionEnum `json:"action"`
    Data ListTechniquesDirectives200ApplicationJSONData `json:"data"`
    Result ListTechniquesDirectives200ApplicationJSONResultEnum `json:"result"`
    
}

type ListTechniquesDirectivesResponse struct {
    ContentType string 
    StatusCode int64 
    ListTechniquesDirectives200ApplicationJSONObject *ListTechniquesDirectives200ApplicationJSON 
    
}

