package shared

type ListTeamMemberBookingProfilesResponse struct {
	Cursor                    *string                    `json:"cursor"`
	Errors                    []Error                    `json:"errors"`
	TeamMemberBookingProfiles []TeamMemberBookingProfile `json:"team_member_booking_profiles"`
}
