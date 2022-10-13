package shared

type LumaAsset struct {
	Src  string   `json:"src"`
	Trim *float64 `json:"trim"`
	Type string   `json:"type"`
}
