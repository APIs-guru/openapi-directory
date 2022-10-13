package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateChangeRequestPathParams struct {
	ChangeRequestID int64 `pathParam:"style=simple,explode=false,name=changeRequestId"`
}

type UpdateChangeRequestRequestBody struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
}

type UpdateChangeRequestRequest struct {
	PathParams UpdateChangeRequestPathParams
	Request    UpdateChangeRequestRequestBody `request:"mediaType=application/json"`
}

type UpdateChangeRequest200ApplicationJSONActionEnum string

const (
	UpdateChangeRequest200ApplicationJSONActionEnumUpdateChangeRequest UpdateChangeRequest200ApplicationJSONActionEnum = "updateChangeRequest"
)

type UpdateChangeRequest200ApplicationJSONData struct {
	Rules []shared.ChangeRequest `json:"rules"`
}

type UpdateChangeRequest200ApplicationJSONResultEnum string

const (
	UpdateChangeRequest200ApplicationJSONResultEnumSuccess UpdateChangeRequest200ApplicationJSONResultEnum = "success"
	UpdateChangeRequest200ApplicationJSONResultEnumError   UpdateChangeRequest200ApplicationJSONResultEnum = "error"
)

type UpdateChangeRequest200ApplicationJSON struct {
	Action UpdateChangeRequest200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateChangeRequest200ApplicationJSONData       `json:"data"`
	Result UpdateChangeRequest200ApplicationJSONResultEnum `json:"result"`
}

type UpdateChangeRequestResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	UpdateChangeRequest200ApplicationJSONObject *UpdateChangeRequest200ApplicationJSON
}
