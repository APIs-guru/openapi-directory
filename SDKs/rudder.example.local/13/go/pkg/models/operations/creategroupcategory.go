package operations

import (
"openapi/pkg/models/shared")

type CreateGroupCategoryRequest struct {
    Request shared.GroupCategory `request:"mediaType=application/json"`
    
}


type CreateGroupCategory200ApplicationJSONActionEnum string

const (
    CreateGroupCategory200ApplicationJSONActionEnumCreateGroupCategory CreateGroupCategory200ApplicationJSONActionEnum = "CreateGroupCategory"
)


type CreateGroupCategory200ApplicationJSONData struct {
    GroupCategories []shared.GroupCategory `json:"groupCategories"`
    
}


type CreateGroupCategory200ApplicationJSONResultEnum string

const (
    CreateGroupCategory200ApplicationJSONResultEnumSuccess CreateGroupCategory200ApplicationJSONResultEnum = "success"
CreateGroupCategory200ApplicationJSONResultEnumError CreateGroupCategory200ApplicationJSONResultEnum = "error"
)


type CreateGroupCategory200ApplicationJSON struct {
    Action CreateGroupCategory200ApplicationJSONActionEnum `json:"action"`
    Data CreateGroupCategory200ApplicationJSONData `json:"data"`
    Result CreateGroupCategory200ApplicationJSONResultEnum `json:"result"`
    
}

type CreateGroupCategoryResponse struct {
    ContentType string 
    CreateGroupCategory200ApplicationJSONObject *CreateGroupCategory200ApplicationJSON 
    StatusCode int64 
    
}

