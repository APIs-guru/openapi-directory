package shared

type Endpoint struct {
	Methods []string `json:"methods"`
	Path    string   `json:"path"`
}
