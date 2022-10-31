package operations

import (
"openapi/pkg/models/shared")

type DeleteNodePathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type DeleteNodeQueryParams struct {
    Mode *shared.NodeDeleteModeEnum `queryParam:"style=form,explode=true,name=mode"`
    
}

type DeleteNodeRequest struct {
    PathParams DeleteNodePathParams 
    QueryParams DeleteNodeQueryParams 
    
}


type DeleteNode200ApplicationJSONActionEnum string

const (
    DeleteNode200ApplicationJSONActionEnumDeleteNode DeleteNode200ApplicationJSONActionEnum = "deleteNode"
)


type DeleteNode200ApplicationJSONData struct {
    Nodes []shared.NodeFull `json:"nodes"`
    
}


type DeleteNode200ApplicationJSONResultEnum string

const (
    DeleteNode200ApplicationJSONResultEnumSuccess DeleteNode200ApplicationJSONResultEnum = "success"
DeleteNode200ApplicationJSONResultEnumError DeleteNode200ApplicationJSONResultEnum = "error"
)


type DeleteNode200ApplicationJSON struct {
    Action DeleteNode200ApplicationJSONActionEnum `json:"action"`
    Data DeleteNode200ApplicationJSONData `json:"data"`
    Result DeleteNode200ApplicationJSONResultEnum `json:"result"`
    
}

type DeleteNodeResponse struct {
    ContentType string 
    StatusCode int64 
    DeleteNode200ApplicationJSONObject *DeleteNode200ApplicationJSON 
    
}

