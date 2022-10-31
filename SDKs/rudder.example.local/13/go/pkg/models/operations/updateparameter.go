package operations

import (
"openapi/pkg/models/shared")

type UpdateParameterPathParams struct {
    ParameterID string `pathParam:"style=simple,explode=false,name=parameterId"`
    
}

type UpdateParameterRequest struct {
    PathParams UpdateParameterPathParams 
    
}


type UpdateParameter200ApplicationJSONActionEnum string

const (
    UpdateParameter200ApplicationJSONActionEnumUpdateParameter UpdateParameter200ApplicationJSONActionEnum = "updateParameter"
)


type UpdateParameter200ApplicationJSONData struct {
    Parameters []shared.Parameter `json:"parameters"`
    
}


type UpdateParameter200ApplicationJSONResultEnum string

const (
    UpdateParameter200ApplicationJSONResultEnumSuccess UpdateParameter200ApplicationJSONResultEnum = "success"
UpdateParameter200ApplicationJSONResultEnumError UpdateParameter200ApplicationJSONResultEnum = "error"
)


type UpdateParameter200ApplicationJSON struct {
    Action UpdateParameter200ApplicationJSONActionEnum `json:"action"`
    Data UpdateParameter200ApplicationJSONData `json:"data"`
    ID string `json:"id"`
    Result UpdateParameter200ApplicationJSONResultEnum `json:"result"`
    
}

type UpdateParameterResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateParameter200ApplicationJSONObject *UpdateParameter200ApplicationJSON 
    
}

