package shared

type Timeline struct {
	Background *string     `json:"background,omitempty"`
	Cache      *bool       `json:"cache,omitempty"`
	Fonts      []Font      `json:"fonts,omitempty"`
	Soundtrack *Soundtrack `json:"soundtrack,omitempty"`
	Tracks     []Track     `json:"tracks"`
}
