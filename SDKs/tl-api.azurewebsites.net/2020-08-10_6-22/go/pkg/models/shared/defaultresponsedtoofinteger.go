package shared

type DefaultResponseDtoOfInteger struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *int32       `json:"result"`
}
