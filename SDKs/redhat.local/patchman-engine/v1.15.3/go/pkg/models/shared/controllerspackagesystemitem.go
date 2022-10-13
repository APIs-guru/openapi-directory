package shared

type ControllersPackageSystemItem struct {
	AvailableEvra *string `json:"available_evra"`
	DisplayName   *string `json:"display_name"`
	ID            *string `json:"id"`
	InstalledEvra *string `json:"installed_evra"`
	Updatable     *bool   `json:"updatable"`
}
