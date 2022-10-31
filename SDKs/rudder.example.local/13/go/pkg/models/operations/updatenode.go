package operations

import (
"openapi/pkg/models/shared")

type UpdateNodePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type UpdateNodeRequest struct {
    PathParams UpdateNodePathParams 
    Request *shared.NodeSettings `request:"mediaType=application/json"`
    
}


type UpdateNode200ApplicationJSONActionEnum string

const (
    UpdateNode200ApplicationJSONActionEnumUpdateNode UpdateNode200ApplicationJSONActionEnum = "updateNode"
)


type UpdateNode200ApplicationJSONData struct {
    Nodes []shared.NodeFull `json:"nodes"`
    
}


type UpdateNode200ApplicationJSONResultEnum string

const (
    UpdateNode200ApplicationJSONResultEnumSuccess UpdateNode200ApplicationJSONResultEnum = "success"
UpdateNode200ApplicationJSONResultEnumError UpdateNode200ApplicationJSONResultEnum = "error"
)


type UpdateNode200ApplicationJSON struct {
    Action UpdateNode200ApplicationJSONActionEnum `json:"action"`
    Data UpdateNode200ApplicationJSONData `json:"data"`
    Result UpdateNode200ApplicationJSONResultEnum `json:"result"`
    
}

type UpdateNodeResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNode200ApplicationJSONObject *UpdateNode200ApplicationJSON 
    
}

