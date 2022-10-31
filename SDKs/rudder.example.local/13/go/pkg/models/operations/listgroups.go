package operations

import (
"openapi/pkg/models/shared")


type ListGroups200ApplicationJSONActionEnum string

const (
    ListGroups200ApplicationJSONActionEnumListGroups ListGroups200ApplicationJSONActionEnum = "listGroups"
)


type ListGroups200ApplicationJSONData struct {
    Groups []shared.Group `json:"groups"`
    
}


type ListGroups200ApplicationJSONResultEnum string

const (
    ListGroups200ApplicationJSONResultEnumSuccess ListGroups200ApplicationJSONResultEnum = "success"
ListGroups200ApplicationJSONResultEnumError ListGroups200ApplicationJSONResultEnum = "error"
)


type ListGroups200ApplicationJSON struct {
    Action ListGroups200ApplicationJSONActionEnum `json:"action"`
    Data ListGroups200ApplicationJSONData `json:"data"`
    Result ListGroups200ApplicationJSONResultEnum `json:"result"`
    
}

type ListGroupsResponse struct {
    ContentType string 
    StatusCode int64 
    ListGroups200ApplicationJSONObject *ListGroups200ApplicationJSON 
    
}

