package shared

type Timeline struct {
	Background *string     `json:"background"`
	Cache      *bool       `json:"cache"`
	Fonts      []Font      `json:"fonts"`
	Soundtrack *Soundtrack `json:"soundtrack"`
	Tracks     []Track     `json:"tracks"`
}
