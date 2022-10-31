package shared

type NsxControllerDataCollection struct {
	ControllerPassword *string `json:"controller_password,omitempty"`
	Enabled            *bool   `json:"enabled,omitempty"`
}
