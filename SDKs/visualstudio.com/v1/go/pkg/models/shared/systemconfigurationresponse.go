package shared

type SystemConfigurationResponse struct {
	Comment *string `json:"comment,omitempty"`
	Key     *string `json:"key,omitempty"`
	Value   *string `json:"value,omitempty"`
}
