package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRulePathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type DeleteRule200ApplicationJSONActionEnum string

const (
	DeleteRule200ApplicationJSONActionEnumDeleteRule DeleteRule200ApplicationJSONActionEnum = "deleteRule"
)

type DeleteRule200ApplicationJSONData struct {
	Rules []shared.Rule `json:"rules"`
}

type DeleteRule200ApplicationJSONResultEnum string

const (
	DeleteRule200ApplicationJSONResultEnumSuccess DeleteRule200ApplicationJSONResultEnum = "success"
	DeleteRule200ApplicationJSONResultEnumError   DeleteRule200ApplicationJSONResultEnum = "error"
)

type DeleteRule200ApplicationJSON struct {
	Action DeleteRule200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteRule200ApplicationJSONData       `json:"data"`
	Result DeleteRule200ApplicationJSONResultEnum `json:"result"`
}

type DeleteRuleRequest struct {
	PathParams DeleteRulePathParams
}

type DeleteRuleResponse struct {
	ContentType                        string
	StatusCode                         int64
	DeleteRule200ApplicationJSONObject *DeleteRule200ApplicationJSON
}
