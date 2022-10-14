package shared

type FilterValue struct {
	All  []string `json:"all,omitempty"`
	Any  []string `json:"any,omitempty"`
	None []string `json:"none,omitempty"`
}
