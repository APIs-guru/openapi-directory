package operations

import (
	"openapi/pkg/models/shared"
)

type ChangeRequestDetailsPathParams struct {
	ChangeRequestID int64 `pathParam:"style=simple,explode=false,name=changeRequestId"`
}

type ChangeRequestDetails200ApplicationJSONActionEnum string

const (
	ChangeRequestDetails200ApplicationJSONActionEnumChangeRequestDetails ChangeRequestDetails200ApplicationJSONActionEnum = "changeRequestDetails"
)

type ChangeRequestDetails200ApplicationJSONData struct {
	Rules []shared.ChangeRequest `json:"rules"`
}

type ChangeRequestDetails200ApplicationJSONResultEnum string

const (
	ChangeRequestDetails200ApplicationJSONResultEnumSuccess ChangeRequestDetails200ApplicationJSONResultEnum = "success"
	ChangeRequestDetails200ApplicationJSONResultEnumError   ChangeRequestDetails200ApplicationJSONResultEnum = "error"
)

type ChangeRequestDetails200ApplicationJSON struct {
	Action ChangeRequestDetails200ApplicationJSONActionEnum `json:"action"`
	Data   ChangeRequestDetails200ApplicationJSONData       `json:"data"`
	Result ChangeRequestDetails200ApplicationJSONResultEnum `json:"result"`
}

type ChangeRequestDetailsRequest struct {
	PathParams ChangeRequestDetailsPathParams
}

type ChangeRequestDetailsResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	ChangeRequestDetails200ApplicationJSONObject *ChangeRequestDetails200ApplicationJSON
}
