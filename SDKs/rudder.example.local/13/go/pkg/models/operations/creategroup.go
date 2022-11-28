package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGroup200ApplicationJSONActionEnum string

const (
	CreateGroup200ApplicationJSONActionEnumCreateGroup CreateGroup200ApplicationJSONActionEnum = "createGroup"
)

type CreateGroup200ApplicationJSONData struct {
	Groups []shared.Group `json:"groups"`
}

type CreateGroup200ApplicationJSONResultEnum string

const (
	CreateGroup200ApplicationJSONResultEnumSuccess CreateGroup200ApplicationJSONResultEnum = "success"
	CreateGroup200ApplicationJSONResultEnumError   CreateGroup200ApplicationJSONResultEnum = "error"
)

type CreateGroup200ApplicationJSON struct {
	Action CreateGroup200ApplicationJSONActionEnum `json:"action"`
	Data   CreateGroup200ApplicationJSONData       `json:"data"`
	Result CreateGroup200ApplicationJSONResultEnum `json:"result"`
}

type CreateGroupRequest struct {
	Request *shared.GroupNew `request:"mediaType=application/json"`
}

type CreateGroupResponse struct {
	ContentType                         string
	StatusCode                          int64
	CreateGroup200ApplicationJSONObject *CreateGroup200ApplicationJSON
}
