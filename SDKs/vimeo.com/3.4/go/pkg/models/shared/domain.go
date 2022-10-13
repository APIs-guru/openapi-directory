package shared

type Domain struct {
	AllowHd bool   `json:"allow_hd"`
	Domain  string `json:"domain"`
	URI     string `json:"uri"`
}
