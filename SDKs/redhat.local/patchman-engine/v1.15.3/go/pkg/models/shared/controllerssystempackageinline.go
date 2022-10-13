package shared

type ControllersSystemPackageInline struct {
	Description *string `json:"description"`
	Evra        *string `json:"evra"`
	LatestEvra  *string `json:"latest_evra"`
	Name        *string `json:"name"`
	Summary     *string `json:"summary"`
	Updatable   *bool   `json:"updatable"`
}
