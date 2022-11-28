package shared

// SwitchConfigurationContainer
// The configuration for a phase switch
type SwitchConfigurationContainer struct {
	CanSwitchOff *bool  `json:"CanSwitchOff,omitempty"`
	Number       *int32 `json:"Number,omitempty"`
}
