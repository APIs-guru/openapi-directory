package shared

type DefaultResponseDtoOfString struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *string      `json:"result"`
}
