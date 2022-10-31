package operations

import (
"openapi/pkg/models/shared")

type GroupDetailsPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type GroupDetailsRequest struct {
    PathParams GroupDetailsPathParams 
    
}


type GroupDetails200ApplicationJSONActionEnum string

const (
    GroupDetails200ApplicationJSONActionEnumGroupDetails GroupDetails200ApplicationJSONActionEnum = "groupDetails"
)


type GroupDetails200ApplicationJSONData struct {
    Groups []shared.Group `json:"groups"`
    
}


type GroupDetails200ApplicationJSONResultEnum string

const (
    GroupDetails200ApplicationJSONResultEnumSuccess GroupDetails200ApplicationJSONResultEnum = "success"
GroupDetails200ApplicationJSONResultEnumError GroupDetails200ApplicationJSONResultEnum = "error"
)


type GroupDetails200ApplicationJSON struct {
    Action GroupDetails200ApplicationJSONActionEnum `json:"action"`
    Data GroupDetails200ApplicationJSONData `json:"data"`
    Result GroupDetails200ApplicationJSONResultEnum `json:"result"`
    
}

type GroupDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    GroupDetails200ApplicationJSONObject *GroupDetails200ApplicationJSON 
    
}

