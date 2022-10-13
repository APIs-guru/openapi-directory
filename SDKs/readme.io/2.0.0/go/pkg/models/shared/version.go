package shared

type Version struct {
	Codename     *string `json:"codename"`
	From         string  `json:"from"`
	IsBeta       *bool   `json:"is_beta"`
	IsDeprecated *bool   `json:"is_deprecated"`
	IsHidden     *bool   `json:"is_hidden"`
	IsStable     *bool   `json:"is_stable"`
	Version      string  `json:"version"`
}
