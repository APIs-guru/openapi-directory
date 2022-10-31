package operations

import (
"openapi/pkg/models/shared")

type CreateParameterRequest struct {
    Request shared.Parameter `request:"mediaType=application/json"`
    
}


type CreateParameter200ApplicationJSONActionEnum string

const (
    CreateParameter200ApplicationJSONActionEnumCreateParameter CreateParameter200ApplicationJSONActionEnum = "createParameter"
)


type CreateParameter200ApplicationJSONData struct {
    Parameters []shared.Parameter `json:"parameters"`
    
}


type CreateParameter200ApplicationJSONResultEnum string

const (
    CreateParameter200ApplicationJSONResultEnumSuccess CreateParameter200ApplicationJSONResultEnum = "success"
CreateParameter200ApplicationJSONResultEnumError CreateParameter200ApplicationJSONResultEnum = "error"
)


type CreateParameter200ApplicationJSON struct {
    Action CreateParameter200ApplicationJSONActionEnum `json:"action"`
    Data CreateParameter200ApplicationJSONData `json:"data"`
    ID string `json:"id"`
    Result CreateParameter200ApplicationJSONResultEnum `json:"result"`
    
}

type CreateParameterResponse struct {
    ContentType string 
    StatusCode int64 
    CreateParameter200ApplicationJSONObject *CreateParameter200ApplicationJSON 
    
}

