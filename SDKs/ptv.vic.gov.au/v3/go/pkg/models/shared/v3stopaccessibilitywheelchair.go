package shared

type V3StopAccessibilityWheelchair struct {
	AccessibleRamp         *bool `json:"accessible_ramp,omitempty"`
	LowTicketCounter       *bool `json:"low_ticket_counter,omitempty"`
	Manouvering            *bool `json:"manouvering,omitempty"`
	Parking                *bool `json:"parking,omitempty"`
	RaisedPlatform         *bool `json:"raised_platform,omitempty"`
	RaisedPlatformShelther *bool `json:"raised_platform_shelther,omitempty"`
	Ramp                   *bool `json:"ramp,omitempty"`
	SecondaryPath          *bool `json:"secondary_path,omitempty"`
	SteepRamp              *bool `json:"steep_ramp,omitempty"`
	Telephone              *bool `json:"telephone,omitempty"`
	Toilet                 *bool `json:"toilet,omitempty"`
}
