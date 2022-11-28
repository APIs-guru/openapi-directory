package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRulePathParams struct {
	RuleID string `pathParam:"style=simple,explode=false,name=ruleId"`
}

type UpdateRule200ApplicationJSONActionEnum string

const (
	UpdateRule200ApplicationJSONActionEnumUpdateRule UpdateRule200ApplicationJSONActionEnum = "updateRule"
)

type UpdateRule200ApplicationJSONData struct {
	Rules []shared.RuleWithCategory `json:"rules"`
}

type UpdateRule200ApplicationJSONResultEnum string

const (
	UpdateRule200ApplicationJSONResultEnumSuccess UpdateRule200ApplicationJSONResultEnum = "success"
	UpdateRule200ApplicationJSONResultEnumError   UpdateRule200ApplicationJSONResultEnum = "error"
)

type UpdateRule200ApplicationJSON struct {
	Action UpdateRule200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateRule200ApplicationJSONData       `json:"data"`
	Result UpdateRule200ApplicationJSONResultEnum `json:"result"`
}

type UpdateRuleRequest struct {
	PathParams UpdateRulePathParams
	Request    shared.RuleWithCategory `request:"mediaType=application/json"`
}

type UpdateRuleResponse struct {
	ContentType                        string
	StatusCode                         int64
	UpdateRule200ApplicationJSONObject *UpdateRule200ApplicationJSON
}
