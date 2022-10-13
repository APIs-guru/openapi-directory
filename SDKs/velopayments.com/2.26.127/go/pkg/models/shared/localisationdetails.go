package shared

type LocalisationDetails struct {
	Parameters map[string]string `json:"parameters"`
	Template   *string           `json:"template"`
}
