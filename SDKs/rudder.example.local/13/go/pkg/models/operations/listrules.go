package operations

import (
	"openapi/pkg/models/shared"
)

type ListRules200ApplicationJSONActionEnum string

const (
	ListRules200ApplicationJSONActionEnumListRules ListRules200ApplicationJSONActionEnum = "listRules"
)

type ListRules200ApplicationJSONData struct {
	Rules []shared.Rule `json:"rules"`
}

type ListRules200ApplicationJSONResultEnum string

const (
	ListRules200ApplicationJSONResultEnumSuccess ListRules200ApplicationJSONResultEnum = "success"
	ListRules200ApplicationJSONResultEnumError   ListRules200ApplicationJSONResultEnum = "error"
)

type ListRules200ApplicationJSON struct {
	Action ListRules200ApplicationJSONActionEnum `json:"action"`
	Data   ListRules200ApplicationJSONData       `json:"data"`
	Result ListRules200ApplicationJSONResultEnum `json:"result"`
}

type ListRulesResponse struct {
	ContentType                       string
	StatusCode                        int64
	ListRules200ApplicationJSONObject *ListRules200ApplicationJSON
}
