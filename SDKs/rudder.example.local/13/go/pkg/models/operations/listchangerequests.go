package operations

import (
"openapi/pkg/models/shared")


type ListChangeRequests200ApplicationJSONActionEnum string

const (
    ListChangeRequests200ApplicationJSONActionEnumListChangeRequests ListChangeRequests200ApplicationJSONActionEnum = "listChangeRequests"
)


type ListChangeRequests200ApplicationJSONData struct {
    Rules []shared.ChangeRequest `json:"rules"`
    
}


type ListChangeRequests200ApplicationJSONResultEnum string

const (
    ListChangeRequests200ApplicationJSONResultEnumSuccess ListChangeRequests200ApplicationJSONResultEnum = "success"
ListChangeRequests200ApplicationJSONResultEnumError ListChangeRequests200ApplicationJSONResultEnum = "error"
)


type ListChangeRequests200ApplicationJSON struct {
    Action ListChangeRequests200ApplicationJSONActionEnum `json:"action"`
    Data ListChangeRequests200ApplicationJSONData `json:"data"`
    Result ListChangeRequests200ApplicationJSONResultEnum `json:"result"`
    
}

type ListChangeRequestsResponse struct {
    ContentType string 
    StatusCode int64 
    ListChangeRequests200ApplicationJSONObject *ListChangeRequests200ApplicationJSON 
    
}

