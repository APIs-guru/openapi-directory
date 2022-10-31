package operations

import (
"openapi/pkg/models/shared")

type UpdateDirectivePathParams struct {
    DirectiveID string `pathParam:"style=simple,explode=false,name=directiveId"`
    
}

type UpdateDirectiveRequest struct {
    PathParams UpdateDirectivePathParams 
    Request shared.Directive `request:"mediaType=application/json"`
    
}


type UpdateDirective200ApplicationJSONActionEnum string

const (
    UpdateDirective200ApplicationJSONActionEnumUpdateDirective UpdateDirective200ApplicationJSONActionEnum = "updateDirective"
)


type UpdateDirective200ApplicationJSONData struct {
    Directives []shared.Directive `json:"directives"`
    
}


type UpdateDirective200ApplicationJSONResultEnum string

const (
    UpdateDirective200ApplicationJSONResultEnumSuccess UpdateDirective200ApplicationJSONResultEnum = "success"
UpdateDirective200ApplicationJSONResultEnumError UpdateDirective200ApplicationJSONResultEnum = "error"
)


type UpdateDirective200ApplicationJSON struct {
    Action UpdateDirective200ApplicationJSONActionEnum `json:"action"`
    Data UpdateDirective200ApplicationJSONData `json:"data"`
    Result UpdateDirective200ApplicationJSONResultEnum `json:"result"`
    
}

type UpdateDirectiveResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateDirective200ApplicationJSONObject *UpdateDirective200ApplicationJSON 
    
}

