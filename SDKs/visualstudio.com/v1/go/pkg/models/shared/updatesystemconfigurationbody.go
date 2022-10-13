package shared

type UpdateSystemConfigurationBody struct {
	Comment *string `json:"comment"`
	Key     *string `json:"key"`
	Value   *string `json:"value"`
}
