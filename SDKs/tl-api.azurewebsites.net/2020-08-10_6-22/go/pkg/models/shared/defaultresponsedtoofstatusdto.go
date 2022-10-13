package shared

type DefaultResponseDtoOfStatusDto struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *interface{} `json:"result"`
}
