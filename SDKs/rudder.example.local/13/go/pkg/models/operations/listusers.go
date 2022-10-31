package operations

import (
"openapi/pkg/models/shared")


type ListUsers200ApplicationJSONActionEnum string

const (
    ListUsers200ApplicationJSONActionEnumListUsers ListUsers200ApplicationJSONActionEnum = "listUsers"
)



type ListUsers200ApplicationJSONResultEnum string

const (
    ListUsers200ApplicationJSONResultEnumSuccess ListUsers200ApplicationJSONResultEnum = "success"
ListUsers200ApplicationJSONResultEnumError ListUsers200ApplicationJSONResultEnum = "error"
)


type ListUsers200ApplicationJSON struct {
    Action ListUsers200ApplicationJSONActionEnum `json:"action"`
    Data []shared.ValidatedUser `json:"data"`
    Result ListUsers200ApplicationJSONResultEnum `json:"result"`
    
}

type ListUsersResponse struct {
    ContentType string 
    StatusCode int64 
    ListUsers200ApplicationJSONObject *ListUsers200ApplicationJSON 
    
}

