package shared

type ControllersSystemPackageData struct {
	Description *string               `json:"description"`
	Evra        *string               `json:"evra"`
	Name        *string               `json:"name"`
	Summary     *string               `json:"summary"`
	Updatable   *bool                 `json:"updatable"`
	Updates     []ModelsPackageUpdate `json:"updates"`
}
