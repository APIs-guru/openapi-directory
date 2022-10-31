package operations

import (
"openapi/pkg/models/shared")

type UpdateGroupPathParams struct {
    GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type UpdateGroupRequest struct {
    PathParams UpdateGroupPathParams 
    Request shared.GroupUpdate `request:"mediaType=application/json"`
    
}


type UpdateGroup200ApplicationJSONActionEnum string

const (
    UpdateGroup200ApplicationJSONActionEnumUpdateGroup UpdateGroup200ApplicationJSONActionEnum = "updateGroup"
)


type UpdateGroup200ApplicationJSONData struct {
    Groups []shared.Group `json:"groups"`
    
}


type UpdateGroup200ApplicationJSONResultEnum string

const (
    UpdateGroup200ApplicationJSONResultEnumSuccess UpdateGroup200ApplicationJSONResultEnum = "success"
UpdateGroup200ApplicationJSONResultEnumError UpdateGroup200ApplicationJSONResultEnum = "error"
)


type UpdateGroup200ApplicationJSON struct {
    Action UpdateGroup200ApplicationJSONActionEnum `json:"action"`
    Data UpdateGroup200ApplicationJSONData `json:"data"`
    Result UpdateGroup200ApplicationJSONResultEnum `json:"result"`
    
}

type UpdateGroupResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateGroup200ApplicationJSONObject *UpdateGroup200ApplicationJSON 
    
}

