package operations

import (
"openapi/pkg/models/shared")

type RuleDetailsPathParams struct {
    RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
    
}

type RuleDetailsRequest struct {
    PathParams RuleDetailsPathParams 
    
}


type RuleDetails200ApplicationJSONActionEnum string

const (
    RuleDetails200ApplicationJSONActionEnumRuleDetails RuleDetails200ApplicationJSONActionEnum = "ruleDetails"
)


type RuleDetails200ApplicationJSONData struct {
    Rules []shared.Rule `json:"rules"`
    
}


type RuleDetails200ApplicationJSONResultEnum string

const (
    RuleDetails200ApplicationJSONResultEnumSuccess RuleDetails200ApplicationJSONResultEnum = "success"
RuleDetails200ApplicationJSONResultEnumError RuleDetails200ApplicationJSONResultEnum = "error"
)


type RuleDetails200ApplicationJSON struct {
    Action RuleDetails200ApplicationJSONActionEnum `json:"action"`
    Data RuleDetails200ApplicationJSONData `json:"data"`
    Result RuleDetails200ApplicationJSONResultEnum `json:"result"`
    
}

type RuleDetailsResponse struct {
    ContentType string 
    StatusCode int64 
    RuleDetails200ApplicationJSONObject *RuleDetails200ApplicationJSON 
    
}

