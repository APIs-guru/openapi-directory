package operations

import (
	"openapi/pkg/models/shared"
)

type DeclineChangeRequestPathParams struct {
	ChangeRequestID int64 `pathParam:"style=simple,explode=false,name=changeRequestId"`
}

type DeclineChangeRequestRequest struct {
	PathParams DeclineChangeRequestPathParams
}

type DeclineChangeRequest200ApplicationJSONActionEnum string

const (
	DeclineChangeRequest200ApplicationJSONActionEnumDeclineChangeRequest DeclineChangeRequest200ApplicationJSONActionEnum = "declineChangeRequest"
)

type DeclineChangeRequest200ApplicationJSONData struct {
	Rules []shared.ChangeRequest `json:"rules"`
}

type DeclineChangeRequest200ApplicationJSONResultEnum string

const (
	DeclineChangeRequest200ApplicationJSONResultEnumSuccess DeclineChangeRequest200ApplicationJSONResultEnum = "success"
	DeclineChangeRequest200ApplicationJSONResultEnumError   DeclineChangeRequest200ApplicationJSONResultEnum = "error"
)

type DeclineChangeRequest200ApplicationJSON struct {
	Action DeclineChangeRequest200ApplicationJSONActionEnum `json:"action"`
	Data   DeclineChangeRequest200ApplicationJSONData       `json:"data"`
	Result DeclineChangeRequest200ApplicationJSONResultEnum `json:"result"`
}

type DeclineChangeRequestResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	DeclineChangeRequest200ApplicationJSONObject *DeclineChangeRequest200ApplicationJSON
}
