package shared

type V3StopAccessibility struct {
	AudioCustomerInformation      *bool                          `json:"audio_customer_information"`
	Escalator                     *bool                          `json:"escalator"`
	HearingLoop                   *bool                          `json:"hearing_loop"`
	Lift                          *bool                          `json:"lift"`
	Lighting                      *bool                          `json:"lighting"`
	PlatformNumber                *int32                         `json:"platform_number"`
	Stairs                        *bool                          `json:"stairs"`
	StopAccessible                *bool                          `json:"stop_accessible"`
	TactileGroundSurfaceIndicator *bool                          `json:"tactile_ground_surface_indicator"`
	WaitingRoom                   *bool                          `json:"waiting_room"`
	Wheelchair                    *V3StopAccessibilityWheelchair `json:"wheelchair"`
}
