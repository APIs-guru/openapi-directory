package shared

type ExampleList struct {
	Data   []Example `json:"data,omitempty"`
	Object *string   `json:"object,omitempty"`
}
