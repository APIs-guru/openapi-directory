package operations

import (
	"openapi/pkg/models/shared"
)

type SaveWorkflowUserRequestBody struct {
	ValidatedUsers []string `json:"validatedUsers"`
}

type SaveWorkflowUserRequest struct {
	Request SaveWorkflowUserRequestBody `request:"mediaType=application/json"`
}

type SaveWorkflowUser200ApplicationJSONActionEnum string

const (
	SaveWorkflowUser200ApplicationJSONActionEnumAddUser SaveWorkflowUser200ApplicationJSONActionEnum = "addUser"
)

type SaveWorkflowUser200ApplicationJSONResultEnum string

const (
	SaveWorkflowUser200ApplicationJSONResultEnumSuccess SaveWorkflowUser200ApplicationJSONResultEnum = "success"
	SaveWorkflowUser200ApplicationJSONResultEnumError   SaveWorkflowUser200ApplicationJSONResultEnum = "error"
)

type SaveWorkflowUser200ApplicationJSON struct {
	Action SaveWorkflowUser200ApplicationJSONActionEnum `json:"action"`
	Data   shared.ValidatedUser                         `json:"data"`
	Result SaveWorkflowUser200ApplicationJSONResultEnum `json:"result"`
}

type SaveWorkflowUserResponse struct {
	ContentType                              string
	StatusCode                               int64
	SaveWorkflowUser200ApplicationJSONObject *SaveWorkflowUser200ApplicationJSON
}
