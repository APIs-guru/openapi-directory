package shared

type RetrieveTeamMemberBookingProfileResponse struct {
	Errors                   []Error                   `json:"errors"`
	TeamMemberBookingProfile *TeamMemberBookingProfile `json:"team_member_booking_profile"`
}
