package operations

type ApplyPolicyAllNodes200ApplicationJSONActionEnum string

const (
	ApplyPolicyAllNodes200ApplicationJSONActionEnumApplyPolicyAllNodes ApplyPolicyAllNodes200ApplicationJSONActionEnum = "applyPolicyAllNodes"
)

type ApplyPolicyAllNodes200ApplicationJSONData struct {
	Hostname *string `json:"hostname"`
	ID       *string `json:"id"`
	Result   *string `json:"result"`
}

type ApplyPolicyAllNodes200ApplicationJSONResultEnum string

const (
	ApplyPolicyAllNodes200ApplicationJSONResultEnumSuccess ApplyPolicyAllNodes200ApplicationJSONResultEnum = "success"
	ApplyPolicyAllNodes200ApplicationJSONResultEnumError   ApplyPolicyAllNodes200ApplicationJSONResultEnum = "error"
)

type ApplyPolicyAllNodes200ApplicationJSON struct {
	Action ApplyPolicyAllNodes200ApplicationJSONActionEnum `json:"action"`
	Data   []ApplyPolicyAllNodes200ApplicationJSONData     `json:"data"`
	Result ApplyPolicyAllNodes200ApplicationJSONResultEnum `json:"result"`
}

type ApplyPolicyAllNodesResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	ApplyPolicyAllNodes200ApplicationJSONObject *ApplyPolicyAllNodes200ApplicationJSON
}
