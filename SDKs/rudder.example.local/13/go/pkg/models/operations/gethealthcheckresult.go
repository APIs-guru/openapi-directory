package operations

import (
	"openapi/pkg/models/shared"
)

type GetHealthcheckResult200ApplicationJSONActionEnum string

const (
	GetHealthcheckResult200ApplicationJSONActionEnumGetHealthcheckResult GetHealthcheckResult200ApplicationJSONActionEnum = "getHealthcheckResult"
)

type GetHealthcheckResult200ApplicationJSONResultEnum string

const (
	GetHealthcheckResult200ApplicationJSONResultEnumSuccess GetHealthcheckResult200ApplicationJSONResultEnum = "success"
	GetHealthcheckResult200ApplicationJSONResultEnumError   GetHealthcheckResult200ApplicationJSONResultEnum = "error"
)

type GetHealthcheckResult200ApplicationJSON struct {
	Action GetHealthcheckResult200ApplicationJSONActionEnum `json:"action"`
	Data   []shared.Check                                   `json:"data"`
	Result GetHealthcheckResult200ApplicationJSONResultEnum `json:"result"`
}

type GetHealthcheckResultResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetHealthcheckResult200ApplicationJSONObject *GetHealthcheckResult200ApplicationJSON
}
