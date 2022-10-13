package shared

type Address struct {
	Line1s map[string]string `json:"line1s"`
	Line2s map[string]string `json:"line2s"`
	Line3s map[string]string `json:"line3s"`
}
