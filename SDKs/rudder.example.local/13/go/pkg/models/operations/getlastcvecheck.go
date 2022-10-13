package operations

import (
	"openapi/pkg/models/shared"
)

type GetLastCveCheck200ApplicationJSONActionEnum string

const (
	GetLastCveCheck200ApplicationJSONActionEnumGetLastCveCheck GetLastCveCheck200ApplicationJSONActionEnum = "getLastCVECheck"
)

type GetLastCveCheck200ApplicationJSONData struct {
	CveChecks []shared.CveCheck `json:"CVEChecks"`
}

type GetLastCveCheck200ApplicationJSONResultEnum string

const (
	GetLastCveCheck200ApplicationJSONResultEnumSuccess GetLastCveCheck200ApplicationJSONResultEnum = "success"
	GetLastCveCheck200ApplicationJSONResultEnumError   GetLastCveCheck200ApplicationJSONResultEnum = "error"
)

type GetLastCveCheck200ApplicationJSON struct {
	Action GetLastCveCheck200ApplicationJSONActionEnum `json:"action"`
	Data   GetLastCveCheck200ApplicationJSONData       `json:"data"`
	Result GetLastCveCheck200ApplicationJSONResultEnum `json:"result"`
}

type GetLastCveCheckResponse struct {
	ContentType                             string
	StatusCode                              int64
	GetLastCveCheck200ApplicationJSONObject *GetLastCveCheck200ApplicationJSON
}
