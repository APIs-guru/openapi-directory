package shared

type SiteOptions struct {
	Description *string `json:"description,omitempty"`
	Excludes    *string `json:"excludes,omitempty"`
	Name        string  `json:"name"`
	Scope       *string `json:"scope,omitempty"`
}
