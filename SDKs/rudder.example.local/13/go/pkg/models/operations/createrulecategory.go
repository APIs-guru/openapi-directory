package operations

import (
"openapi/pkg/models/shared")

type CreateRuleCategoryRequest struct {
    Request shared.RuleCategory `request:"mediaType=application/json"`
    
}


type CreateRuleCategory200ApplicationJSONActionEnum string

const (
    CreateRuleCategory200ApplicationJSONActionEnumCreateRuleCategory CreateRuleCategory200ApplicationJSONActionEnum = "CreateRuleCategory"
)


type CreateRuleCategory200ApplicationJSONData struct {
    RuleCategories []shared.RuleCategory `json:"ruleCategories"`
    
}


type CreateRuleCategory200ApplicationJSONResultEnum string

const (
    CreateRuleCategory200ApplicationJSONResultEnumSuccess CreateRuleCategory200ApplicationJSONResultEnum = "success"
CreateRuleCategory200ApplicationJSONResultEnumError CreateRuleCategory200ApplicationJSONResultEnum = "error"
)


type CreateRuleCategory200ApplicationJSON struct {
    Action CreateRuleCategory200ApplicationJSONActionEnum `json:"action"`
    Data CreateRuleCategory200ApplicationJSONData `json:"data"`
    Result CreateRuleCategory200ApplicationJSONResultEnum `json:"result"`
    
}

type CreateRuleCategoryResponse struct {
    ContentType string 
    CreateRuleCategory200ApplicationJSONObject *CreateRuleCategory200ApplicationJSON 
    StatusCode int64 
    
}

