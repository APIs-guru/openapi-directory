package shared

type DefaultResponseDtoOfBoolean struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *bool        `json:"result"`
}
