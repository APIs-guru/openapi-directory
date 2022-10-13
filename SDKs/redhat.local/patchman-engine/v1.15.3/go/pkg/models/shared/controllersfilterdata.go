package shared

type ControllersFilterData struct {
	Op     *string  `json:"op"`
	Values []string `json:"values"`
}
