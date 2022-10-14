package shared

type ControllersPackageSystemItem struct {
	AvailableEvra *string `json:"available_evra,omitempty"`
	DisplayName   *string `json:"display_name,omitempty"`
	ID            *string `json:"id,omitempty"`
	InstalledEvra *string `json:"installed_evra,omitempty"`
	Updatable     *bool   `json:"updatable,omitempty"`
}
