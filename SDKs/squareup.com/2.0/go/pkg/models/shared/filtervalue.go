package shared

type FilterValue struct {
	All  []string `json:"all"`
	Any  []string `json:"any"`
	None []string `json:"none"`
}
