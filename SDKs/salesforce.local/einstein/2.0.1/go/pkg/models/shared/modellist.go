package shared

type ModelList struct {
	Data   []Model `json:"data,omitempty"`
	Object *string `json:"object,omitempty"`
}
