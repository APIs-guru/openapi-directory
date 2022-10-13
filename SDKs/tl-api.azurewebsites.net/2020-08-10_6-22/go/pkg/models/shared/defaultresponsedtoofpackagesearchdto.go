package shared

type DefaultResponseDtoOfPackageSearchDto struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *interface{} `json:"result"`
}
