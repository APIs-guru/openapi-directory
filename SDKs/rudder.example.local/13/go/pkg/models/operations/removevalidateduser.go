package operations

type RemoveValidatedUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type RemoveValidatedUser200ApplicationJSONActionEnum string

const (
	RemoveValidatedUser200ApplicationJSONActionEnumListUsers RemoveValidatedUser200ApplicationJSONActionEnum = "listUsers"
)

type RemoveValidatedUser200ApplicationJSONResultEnum string

const (
	RemoveValidatedUser200ApplicationJSONResultEnumSuccess RemoveValidatedUser200ApplicationJSONResultEnum = "success"
	RemoveValidatedUser200ApplicationJSONResultEnumError   RemoveValidatedUser200ApplicationJSONResultEnum = "error"
)

type RemoveValidatedUser200ApplicationJSON struct {
	Action RemoveValidatedUser200ApplicationJSONActionEnum `json:"action"`
	Data   string                                          `json:"data"`
	Result RemoveValidatedUser200ApplicationJSONResultEnum `json:"result"`
}

type RemoveValidatedUserRequest struct {
	PathParams RemoveValidatedUserPathParams
}

type RemoveValidatedUserResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	RemoveValidatedUser200ApplicationJSONObject *RemoveValidatedUser200ApplicationJSON
}
