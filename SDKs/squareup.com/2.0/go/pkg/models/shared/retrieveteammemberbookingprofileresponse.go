package shared

type RetrieveTeamMemberBookingProfileResponse struct {
	Errors                   []Error                   `json:"errors,omitempty"`
	TeamMemberBookingProfile *TeamMemberBookingProfile `json:"team_member_booking_profile,omitempty"`
}
