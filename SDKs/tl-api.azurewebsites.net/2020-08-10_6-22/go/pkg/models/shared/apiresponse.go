package shared

type APIResponse struct {
	IsError           *bool        `json:"isError"`
	Message           *string      `json:"message"`
	ResponseException *interface{} `json:"responseException"`
	Result            *interface{} `json:"result"`
	StatusCode        *int32       `json:"statusCode"`
	Version           *string      `json:"version"`
}
