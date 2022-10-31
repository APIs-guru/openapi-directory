package operations

import (
	"openapi/pkg/models/shared"
)

type GetRuleCategoryDetailsPathParams struct {
	RuleCategoryID string `pathParam:"style=simple,explode=false,name=ruleCategoryId"`
}

type GetRuleCategoryDetailsRequest struct {
	PathParams GetRuleCategoryDetailsPathParams
}

type GetRuleCategoryDetails200ApplicationJSONActionEnum string

const (
	GetRuleCategoryDetails200ApplicationJSONActionEnumGetRuleCategoryDetails GetRuleCategoryDetails200ApplicationJSONActionEnum = "GetRuleCategoryDetails"
)

type GetRuleCategoryDetails200ApplicationJSONData struct {
	RulesCategories []shared.RuleCategory `json:"rulesCategories"`
}

type GetRuleCategoryDetails200ApplicationJSONResultEnum string

const (
	GetRuleCategoryDetails200ApplicationJSONResultEnumSuccess GetRuleCategoryDetails200ApplicationJSONResultEnum = "success"
	GetRuleCategoryDetails200ApplicationJSONResultEnumError   GetRuleCategoryDetails200ApplicationJSONResultEnum = "error"
)

type GetRuleCategoryDetails200ApplicationJSON struct {
	Action GetRuleCategoryDetails200ApplicationJSONActionEnum `json:"action"`
	Data   GetRuleCategoryDetails200ApplicationJSONData       `json:"data"`
	Result GetRuleCategoryDetails200ApplicationJSONResultEnum `json:"result"`
}

type GetRuleCategoryDetailsResponse struct {
	ContentType                                    string
	GetRuleCategoryDetails200ApplicationJSONObject *GetRuleCategoryDetails200ApplicationJSON
	StatusCode                                     int64
}
