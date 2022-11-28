package shared

type OrderParametersServiceOfferingInput struct {
	ProviderControlParameters map[string]interface{} `json:"provider_control_parameters,omitempty"`
	ServiceParameters         map[string]interface{} `json:"service_parameters,omitempty"`
}
