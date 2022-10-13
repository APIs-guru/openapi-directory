package shared

type ExplicitContentSettingsObject struct {
	FilterEnabled *bool `json:"filter_enabled"`
	FilterLocked  *bool `json:"filter_locked"`
}
