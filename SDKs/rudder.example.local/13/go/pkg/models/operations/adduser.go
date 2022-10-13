package operations

import (
	"openapi/pkg/models/shared"
)

type AddUserRequest struct {
	Request shared.Users `request:"mediaType=application/json"`
}

type AddUser200ApplicationJSONActionEnum string

const (
	AddUser200ApplicationJSONActionEnumAddUser AddUser200ApplicationJSONActionEnum = "addUser"
)

type AddUser200ApplicationJSONDataAddedUser struct {
	Password *string  `json:"password"`
	Role     []string `json:"role"`
	Username *string  `json:"username"`
}

type AddUser200ApplicationJSONData struct {
	AddedUser AddUser200ApplicationJSONDataAddedUser `json:"addedUser"`
}

type AddUser200ApplicationJSONResultEnum string

const (
	AddUser200ApplicationJSONResultEnumSuccess AddUser200ApplicationJSONResultEnum = "success"
	AddUser200ApplicationJSONResultEnumError   AddUser200ApplicationJSONResultEnum = "error"
)

type AddUser200ApplicationJSON struct {
	Action AddUser200ApplicationJSONActionEnum `json:"action"`
	Data   AddUser200ApplicationJSONData       `json:"data"`
	Result AddUser200ApplicationJSONResultEnum `json:"result"`
}

type AddUserResponse struct {
	ContentType                     string
	StatusCode                      int64
	AddUser200ApplicationJSONObject *AddUser200ApplicationJSON
}
