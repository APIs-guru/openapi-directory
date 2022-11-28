package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type DeleteGroup200ApplicationJSONActionEnum string

const (
	DeleteGroup200ApplicationJSONActionEnumDeleteGroup DeleteGroup200ApplicationJSONActionEnum = "deleteGroup"
)

type DeleteGroup200ApplicationJSONData struct {
	Groups []shared.Group `json:"groups"`
}

type DeleteGroup200ApplicationJSONResultEnum string

const (
	DeleteGroup200ApplicationJSONResultEnumSuccess DeleteGroup200ApplicationJSONResultEnum = "success"
	DeleteGroup200ApplicationJSONResultEnumError   DeleteGroup200ApplicationJSONResultEnum = "error"
)

type DeleteGroup200ApplicationJSON struct {
	Action DeleteGroup200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteGroup200ApplicationJSONData       `json:"data"`
	Result DeleteGroup200ApplicationJSONResultEnum `json:"result"`
}

type DeleteGroupRequest struct {
	PathParams DeleteGroupPathParams
}

type DeleteGroupResponse struct {
	ContentType                         string
	StatusCode                          int64
	DeleteGroup200ApplicationJSONObject *DeleteGroup200ApplicationJSON
}
