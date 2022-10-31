package shared

type ListTeamMemberBookingProfilesResponse struct {
	Cursor                    *string                    `json:"cursor,omitempty"`
	Errors                    []Error                    `json:"errors,omitempty"`
	TeamMemberBookingProfiles []TeamMemberBookingProfile `json:"team_member_booking_profiles,omitempty"`
}
