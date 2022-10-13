package operations

type GetRuleTree200ApplicationJSONActionEnum string

const (
	GetRuleTree200ApplicationJSONActionEnumGetRuleTree GetRuleTree200ApplicationJSONActionEnum = "GetRuleTree"
)

type GetRuleTree200ApplicationJSONData struct {
	RuleCategories map[string]interface{} `json:"ruleCategories"`
}

type GetRuleTree200ApplicationJSONResultEnum string

const (
	GetRuleTree200ApplicationJSONResultEnumSuccess GetRuleTree200ApplicationJSONResultEnum = "success"
	GetRuleTree200ApplicationJSONResultEnumError   GetRuleTree200ApplicationJSONResultEnum = "error"
)

type GetRuleTree200ApplicationJSON struct {
	Action GetRuleTree200ApplicationJSONActionEnum `json:"action"`
	Data   GetRuleTree200ApplicationJSONData       `json:"data"`
	Result GetRuleTree200ApplicationJSONResultEnum `json:"result"`
}

type GetRuleTreeResponse struct {
	ContentType                         string
	GetRuleTree200ApplicationJSONObject *GetRuleTree200ApplicationJSON
	StatusCode                          int64
}
