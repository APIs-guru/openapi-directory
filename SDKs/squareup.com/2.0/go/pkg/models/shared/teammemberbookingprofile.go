package shared

type TeamMemberBookingProfile struct {
	Description     *string `json:"description"`
	DisplayName     *string `json:"display_name"`
	IsBookable      *bool   `json:"is_bookable"`
	ProfileImageURL *string `json:"profile_image_url"`
	TeamMemberID    *string `json:"team_member_id"`
}
