package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRuleCategoryPathParams struct {
	RuleCategoryID string `pathParam:"style=simple,explode=false,name=ruleCategoryId"`
}

type DeleteRuleCategoryRequest struct {
	PathParams DeleteRuleCategoryPathParams
}

type DeleteRuleCategory200ApplicationJSONActionEnum string

const (
	DeleteRuleCategory200ApplicationJSONActionEnumDeleteRuleCategory DeleteRuleCategory200ApplicationJSONActionEnum = "DeleteRuleCategory"
)

type DeleteRuleCategory200ApplicationJSONData struct {
	GroupCategories []shared.RuleCategory `json:"groupCategories"`
}

type DeleteRuleCategory200ApplicationJSONResultEnum string

const (
	DeleteRuleCategory200ApplicationJSONResultEnumSuccess DeleteRuleCategory200ApplicationJSONResultEnum = "success"
	DeleteRuleCategory200ApplicationJSONResultEnumError   DeleteRuleCategory200ApplicationJSONResultEnum = "error"
)

type DeleteRuleCategory200ApplicationJSON struct {
	Action DeleteRuleCategory200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteRuleCategory200ApplicationJSONData       `json:"data"`
	Result DeleteRuleCategory200ApplicationJSONResultEnum `json:"result"`
}

type DeleteRuleCategoryResponse struct {
	ContentType                                string
	DeleteRuleCategory200ApplicationJSONObject *DeleteRuleCategory200ApplicationJSON
	StatusCode                                 int64
}
