package shared

type Techniques struct {
	Name     *string  `json:"name,omitempty"`
	Versions []string `json:"versions,omitempty"`
}
