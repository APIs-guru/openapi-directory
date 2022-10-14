package shared

type APIEndpoints struct {
	EndpointName *string      `json:"endpointName,omitempty"`
	HTTPVerb     *interface{} `json:"httpVerb,omitempty"`
}
