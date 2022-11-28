package operations

import (
	"openapi/pkg/models/shared"
)

type ListParameters200ApplicationJSONActionEnum string

const (
	ListParameters200ApplicationJSONActionEnumListParameters ListParameters200ApplicationJSONActionEnum = "listParameters"
)

// ListParameters200ApplicationJSONData
// Parameters
type ListParameters200ApplicationJSONData struct {
	Parameters []shared.Parameter `json:"parameters"`
}

type ListParameters200ApplicationJSONResultEnum string

const (
	ListParameters200ApplicationJSONResultEnumSuccess ListParameters200ApplicationJSONResultEnum = "success"
	ListParameters200ApplicationJSONResultEnumError   ListParameters200ApplicationJSONResultEnum = "error"
)

type ListParameters200ApplicationJSON struct {
	Action ListParameters200ApplicationJSONActionEnum `json:"action"`
	Data   ListParameters200ApplicationJSONData       `json:"data"`
	Result ListParameters200ApplicationJSONResultEnum `json:"result"`
}

type ListParametersResponse struct {
	ContentType                            string
	StatusCode                             int64
	ListParameters200ApplicationJSONObject *ListParameters200ApplicationJSON
}
