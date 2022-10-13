package shared

type APIEndpoints struct {
	EndpointName *string      `json:"endpointName"`
	HTTPVerb     *interface{} `json:"httpVerb"`
}
