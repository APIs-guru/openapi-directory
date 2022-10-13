package shared

type DefaultResponseDtoOfGymDto struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *interface{} `json:"result"`
}
