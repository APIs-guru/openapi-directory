package shared

type SiteOptions struct {
	Description *string `json:"description"`
	Excludes    *string `json:"excludes"`
	Name        string  `json:"name"`
	Scope       *string `json:"scope"`
}
