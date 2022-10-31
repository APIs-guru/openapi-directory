package operations

import (
"openapi/pkg/models/shared")

type CreateRuleRequest struct {
    Request *shared.RuleNew `request:"mediaType=application/json"`
    
}


type CreateRule200ApplicationJSONActionEnum string

const (
    CreateRule200ApplicationJSONActionEnumCreateRule CreateRule200ApplicationJSONActionEnum = "createRule"
)


type CreateRule200ApplicationJSONData struct {
    Rules []shared.Rule `json:"rules"`
    
}


type CreateRule200ApplicationJSONResultEnum string

const (
    CreateRule200ApplicationJSONResultEnumSuccess CreateRule200ApplicationJSONResultEnum = "success"
CreateRule200ApplicationJSONResultEnumError CreateRule200ApplicationJSONResultEnum = "error"
)


type CreateRule200ApplicationJSON struct {
    Action CreateRule200ApplicationJSONActionEnum `json:"action"`
    Data CreateRule200ApplicationJSONData `json:"data"`
    Result CreateRule200ApplicationJSONResultEnum `json:"result"`
    
}

type CreateRuleResponse struct {
    ContentType string 
    StatusCode int64 
    CreateRule200ApplicationJSONObject *CreateRule200ApplicationJSON 
    
}

