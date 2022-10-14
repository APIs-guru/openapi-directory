package shared

type LumaAsset struct {
	Src  string   `json:"src"`
	Trim *float64 `json:"trim,omitempty"`
	Type string   `json:"type"`
}
