package shared

type V3StopAccessibilityWheelchair struct {
	AccessibleRamp         *bool `json:"accessible_ramp"`
	LowTicketCounter       *bool `json:"low_ticket_counter"`
	Manouvering            *bool `json:"manouvering"`
	Parking                *bool `json:"parking"`
	RaisedPlatform         *bool `json:"raised_platform"`
	RaisedPlatformShelther *bool `json:"raised_platform_shelther"`
	Ramp                   *bool `json:"ramp"`
	SecondaryPath          *bool `json:"secondary_path"`
	SteepRamp              *bool `json:"steep_ramp"`
	Telephone              *bool `json:"telephone"`
	Toilet                 *bool `json:"toilet"`
}
