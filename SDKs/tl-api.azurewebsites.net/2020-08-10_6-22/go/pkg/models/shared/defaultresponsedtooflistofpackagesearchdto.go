package shared

type DefaultResponseDtoOfListOfPackageSearchDto struct {
	IsError           *bool              `json:"isError"`
	Message           *string            `json:"message"`
	ResponseException *interface{}       `json:"responseException"`
	Result            []PackageSearchDto `json:"result"`
}
