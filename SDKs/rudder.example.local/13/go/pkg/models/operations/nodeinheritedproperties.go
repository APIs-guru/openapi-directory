package operations

import (
"openapi/pkg/models/shared")

type NodeInheritedPropertiesPathParams struct {
    NodeID string `pathParam:"style=simple,explode=false,name=nodeId"`
    
}

type NodeInheritedPropertiesRequest struct {
    PathParams NodeInheritedPropertiesPathParams 
    
}


type NodeInheritedProperties200ApplicationJSONActionEnum string

const (
    NodeInheritedProperties200ApplicationJSONActionEnumNodeInheritedProperties NodeInheritedProperties200ApplicationJSONActionEnum = "nodeInheritedProperties"
)



type NodeInheritedProperties200ApplicationJSONResultEnum string

const (
    NodeInheritedProperties200ApplicationJSONResultEnumSuccess NodeInheritedProperties200ApplicationJSONResultEnum = "success"
NodeInheritedProperties200ApplicationJSONResultEnumError NodeInheritedProperties200ApplicationJSONResultEnum = "error"
)


type NodeInheritedProperties200ApplicationJSON struct {
    Action NodeInheritedProperties200ApplicationJSONActionEnum `json:"action"`
    Data []shared.NodeInheritedProperties `json:"data"`
    Result NodeInheritedProperties200ApplicationJSONResultEnum `json:"result"`
    
}

type NodeInheritedPropertiesResponse struct {
    ContentType string 
    StatusCode int64 
    NodeInheritedProperties200ApplicationJSONObject *NodeInheritedProperties200ApplicationJSON 
    
}

