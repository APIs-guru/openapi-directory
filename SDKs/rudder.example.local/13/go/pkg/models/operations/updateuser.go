package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type UpdateUser200ApplicationJSONActionEnum string

const (
	UpdateUser200ApplicationJSONActionEnumUpdateUser UpdateUser200ApplicationJSONActionEnum = "updateUser"
)

type UpdateUser200ApplicationJSONDataUpdatedUser struct {
	Password string   `json:"password"`
	Role     []string `json:"role"`
	Username string   `json:"username"`
}

type UpdateUser200ApplicationJSONData struct {
	UpdatedUser UpdateUser200ApplicationJSONDataUpdatedUser `json:"updatedUser"`
}

type UpdateUser200ApplicationJSONResultEnum string

const (
	UpdateUser200ApplicationJSONResultEnumSuccess UpdateUser200ApplicationJSONResultEnum = "success"
	UpdateUser200ApplicationJSONResultEnumError   UpdateUser200ApplicationJSONResultEnum = "error"
)

type UpdateUser200ApplicationJSON struct {
	Action UpdateUser200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateUser200ApplicationJSONData       `json:"data"`
	Result UpdateUser200ApplicationJSONResultEnum `json:"result"`
}

type UpdateUserRequest struct {
	PathParams UpdateUserPathParams
	Request    shared.Users `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType                        string
	StatusCode                         int64
	UpdateUser200ApplicationJSONObject *UpdateUser200ApplicationJSON
}
