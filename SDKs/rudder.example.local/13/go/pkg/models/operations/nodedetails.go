package operations

import (
"openapi/pkg/models/shared")

type NodeDetailsPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type NodeDetailsQueryParams struct {
    Include *string `queryParam:"style=form,explode=true,name=include"`
    
}

type NodeDetailsRequest struct {
    PathParams NodeDetailsPathParams 
    QueryParams NodeDetailsQueryParams 
    
}


type NodeDetails200ApplicationJSONActionEnum string

const (
    NodeDetails200ApplicationJSONActionEnumNodeDetails NodeDetails200ApplicationJSONActionEnum = "nodeDetails"
)


type NodeDetails200ApplicationJSONData struct {
    Nodes []shared.NodeFull `json:"nodes"`
    
}


type NodeDetails200ApplicationJSONResultEnum string

const (
    NodeDetails200ApplicationJSONResultEnumSuccess NodeDetails200ApplicationJSONResultEnum = "success"
NodeDetails200ApplicationJSONResultEnumError NodeDetails200ApplicationJSONResultEnum = "error"
)


type NodeDetails200ApplicationJSON struct {
    Action NodeDetails200ApplicationJSONActionEnum `json:"action"`
    Data NodeDetails200ApplicationJSONData `json:"data"`
    Result NodeDetails200ApplicationJSONResultEnum `json:"result"`
    
}

type NodeDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    NodeDetails200ApplicationJSONObject *NodeDetails200ApplicationJSON 
    
}

