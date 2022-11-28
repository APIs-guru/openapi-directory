package operations

import (
	"openapi/pkg/models/shared"
)

type ReloadGroupPathParams struct {
	GroupID string `pathParam:"style=simple,explode=false,name=groupId"`
}

type ReloadGroup200ApplicationJSONActionEnum string

const (
	ReloadGroup200ApplicationJSONActionEnumReloadGroup ReloadGroup200ApplicationJSONActionEnum = "reloadGroup"
)

type ReloadGroup200ApplicationJSONData struct {
	Groups []shared.Group `json:"groups"`
}

type ReloadGroup200ApplicationJSONResultEnum string

const (
	ReloadGroup200ApplicationJSONResultEnumSuccess ReloadGroup200ApplicationJSONResultEnum = "success"
	ReloadGroup200ApplicationJSONResultEnumError   ReloadGroup200ApplicationJSONResultEnum = "error"
)

type ReloadGroup200ApplicationJSON struct {
	Action ReloadGroup200ApplicationJSONActionEnum `json:"action"`
	Data   ReloadGroup200ApplicationJSONData       `json:"data"`
	Result ReloadGroup200ApplicationJSONResultEnum `json:"result"`
}

type ReloadGroupRequest struct {
	PathParams ReloadGroupPathParams
}

type ReloadGroupResponse struct {
	ContentType                         string
	StatusCode                          int64
	ReloadGroup200ApplicationJSONObject *ReloadGroup200ApplicationJSON
}
