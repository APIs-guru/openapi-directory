package shared

type TeamMember struct {
	AssignedLocations *TeamMemberAssignedLocations `json:"assigned_locations,omitempty"`
	CreatedAt         *string                      `json:"created_at,omitempty"`
	EmailAddress      *string                      `json:"email_address,omitempty"`
	FamilyName        *string                      `json:"family_name,omitempty"`
	GivenName         *string                      `json:"given_name,omitempty"`
	ID                *string                      `json:"id,omitempty"`
	IsOwner           *bool                        `json:"is_owner,omitempty"`
	PhoneNumber       *string                      `json:"phone_number,omitempty"`
	ReferenceID       *string                      `json:"reference_id,omitempty"`
	Status            *string                      `json:"status,omitempty"`
	UpdatedAt         *string                      `json:"updated_at,omitempty"`
}
