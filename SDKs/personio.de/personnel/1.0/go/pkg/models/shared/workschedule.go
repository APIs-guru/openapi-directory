package shared

type WorkSchedule struct {
	Label string                 `json:"label"`
	Value map[string]interface{} `json:"value"`
}
