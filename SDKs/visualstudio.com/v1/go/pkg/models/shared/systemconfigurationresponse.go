package shared

type SystemConfigurationResponse struct {
	Comment *string `json:"comment"`
	Key     *string `json:"key"`
	Value   *string `json:"value"`
}
