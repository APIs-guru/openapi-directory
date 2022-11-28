package shared

// APIEndpoints
// objects with two fields, the first one has the endpoint name as key and its description as value, the second one has HTTP verb to use (GET, POST PUT, DELETE) as key and the supported version an API path for value.
type APIEndpoints struct {
	EndpointName *string      `json:"endpointName,omitempty"`
	HTTPVerb     *interface{} `json:"httpVerb,omitempty"`
}
