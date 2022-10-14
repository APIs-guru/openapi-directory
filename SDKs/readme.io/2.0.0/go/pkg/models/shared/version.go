package shared

type Version struct {
	Codename     *string `json:"codename,omitempty"`
	From         string  `json:"from"`
	IsBeta       *bool   `json:"is_beta,omitempty"`
	IsDeprecated *bool   `json:"is_deprecated,omitempty"`
	IsHidden     *bool   `json:"is_hidden,omitempty"`
	IsStable     *bool   `json:"is_stable,omitempty"`
	Version      string  `json:"version"`
}
