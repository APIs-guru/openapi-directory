package operations

import (
	"openapi/pkg/models/shared"
)

type CheckCve200ApplicationJSONActionEnum string

const (
	CheckCve200ApplicationJSONActionEnumCheckCve CheckCve200ApplicationJSONActionEnum = "checkCVE"
)

type CheckCve200ApplicationJSONData struct {
	CveChecks []shared.CveCheck `json:"cveChecks"`
}

type CheckCve200ApplicationJSONResultEnum string

const (
	CheckCve200ApplicationJSONResultEnumSuccess CheckCve200ApplicationJSONResultEnum = "success"
	CheckCve200ApplicationJSONResultEnumError   CheckCve200ApplicationJSONResultEnum = "error"
)

type CheckCve200ApplicationJSON struct {
	Action CheckCve200ApplicationJSONActionEnum `json:"action"`
	Data   CheckCve200ApplicationJSONData       `json:"data"`
	Result CheckCve200ApplicationJSONResultEnum `json:"result"`
}

type CheckCveResponse struct {
	ContentType                      string
	StatusCode                       int64
	CheckCve200ApplicationJSONObject *CheckCve200ApplicationJSON
}
