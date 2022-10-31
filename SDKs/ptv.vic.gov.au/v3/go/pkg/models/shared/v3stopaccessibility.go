package shared



type V3StopAccessibility struct {
    AudioCustomerInformation *bool `json:"audio_customer_information,omitempty"`
    Escalator *bool `json:"escalator,omitempty"`
    HearingLoop *bool `json:"hearing_loop,omitempty"`
    Lift *bool `json:"lift,omitempty"`
    Lighting *bool `json:"lighting,omitempty"`
    PlatformNumber *int32 `json:"platform_number,omitempty"`
    Stairs *bool `json:"stairs,omitempty"`
    StopAccessible *bool `json:"stop_accessible,omitempty"`
    TactileGroundSurfaceIndicator *bool `json:"tactile_ground_surface_indicator,omitempty"`
    WaitingRoom *bool `json:"waiting_room,omitempty"`
    Wheelchair *V3StopAccessibilityWheelchair `json:"wheelchair,omitempty"`
    
}

