package shared

type TeamMemberBookingProfile struct {
	Description     *string `json:"description,omitempty"`
	DisplayName     *string `json:"display_name,omitempty"`
	IsBookable      *bool   `json:"is_bookable,omitempty"`
	ProfileImageURL *string `json:"profile_image_url,omitempty"`
	TeamMemberID    *string `json:"team_member_id,omitempty"`
}
