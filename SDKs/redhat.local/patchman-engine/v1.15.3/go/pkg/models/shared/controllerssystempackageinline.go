package shared

type ControllersSystemPackageInline struct {
	Description *string `json:"description,omitempty"`
	Evra        *string `json:"evra,omitempty"`
	LatestEvra  *string `json:"latest_evra,omitempty"`
	Name        *string `json:"name,omitempty"`
	Summary     *string `json:"summary,omitempty"`
	Updatable   *bool   `json:"updatable,omitempty"`
}
