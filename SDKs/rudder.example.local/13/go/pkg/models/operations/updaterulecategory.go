package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRuleCategoryPathParams struct {
	RuleCategoryID string `pathParam:"style=simple,explode=false,name=ruleCategoryId"`
}

type UpdateRuleCategory200ApplicationJSONActionEnum string

const (
	UpdateRuleCategory200ApplicationJSONActionEnumUpdateRuleCategory UpdateRuleCategory200ApplicationJSONActionEnum = "UpdateRuleCategory"
)

type UpdateRuleCategory200ApplicationJSONData struct {
	RuleCategories []shared.RuleCategory `json:"ruleCategories"`
}

type UpdateRuleCategory200ApplicationJSONResultEnum string

const (
	UpdateRuleCategory200ApplicationJSONResultEnumSuccess UpdateRuleCategory200ApplicationJSONResultEnum = "success"
	UpdateRuleCategory200ApplicationJSONResultEnumError   UpdateRuleCategory200ApplicationJSONResultEnum = "error"
)

type UpdateRuleCategory200ApplicationJSON struct {
	Action UpdateRuleCategory200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateRuleCategory200ApplicationJSONData       `json:"data"`
	Result UpdateRuleCategory200ApplicationJSONResultEnum `json:"result"`
}

type UpdateRuleCategoryRequest struct {
	PathParams UpdateRuleCategoryPathParams
	Request    shared.RuleCategoryUpdate `request:"mediaType=application/json"`
}

type UpdateRuleCategoryResponse struct {
	ContentType                                string
	StatusCode                                 int64
	UpdateRuleCategory200ApplicationJSONObject *UpdateRuleCategory200ApplicationJSON
}
