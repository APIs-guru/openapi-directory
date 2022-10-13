package shared

type NsxControllerDataCollection struct {
	ControllerPassword *string `json:"controller_password"`
	Enabled            *bool   `json:"enabled"`
}
