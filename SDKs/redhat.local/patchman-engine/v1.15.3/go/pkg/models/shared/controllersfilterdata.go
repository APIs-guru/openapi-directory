package shared

type ControllersFilterData struct {
	Op     *string  `json:"op,omitempty"`
	Values []string `json:"values,omitempty"`
}
