package shared

type OrderParametersServiceOffering struct {
	ProviderControlParameters map[string]interface{} `json:"provider_control_parameters"`
	ServiceParameters         map[string]interface{} `json:"service_parameters"`
	ServicePlanID             *string                `json:"service_plan_id"`
}
