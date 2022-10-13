package shared

type TeamMember struct {
	AssignedLocations *TeamMemberAssignedLocations `json:"assigned_locations"`
	CreatedAt         *string                      `json:"created_at"`
	EmailAddress      *string                      `json:"email_address"`
	FamilyName        *string                      `json:"family_name"`
	GivenName         *string                      `json:"given_name"`
	ID                *string                      `json:"id"`
	IsOwner           *bool                        `json:"is_owner"`
	PhoneNumber       *string                      `json:"phone_number"`
	ReferenceID       *string                      `json:"reference_id"`
	Status            *string                      `json:"status"`
	UpdatedAt         *string                      `json:"updated_at"`
}
