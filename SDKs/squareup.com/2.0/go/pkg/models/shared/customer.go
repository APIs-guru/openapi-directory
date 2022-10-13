package shared

type Customer struct {
	Address        *Address             `json:"address"`
	Birthday       *string              `json:"birthday"`
	Cards          []Card               `json:"cards"`
	CompanyName    *string              `json:"company_name"`
	CreatedAt      *string              `json:"created_at"`
	CreationSource *string              `json:"creation_source"`
	EmailAddress   *string              `json:"email_address"`
	FamilyName     *string              `json:"family_name"`
	GivenName      *string              `json:"given_name"`
	GroupIds       []string             `json:"group_ids"`
	ID             *string              `json:"id"`
	Nickname       *string              `json:"nickname"`
	Note           *string              `json:"note"`
	PhoneNumber    *string              `json:"phone_number"`
	Preferences    *CustomerPreferences `json:"preferences"`
	ReferenceID    *string              `json:"reference_id"`
	SegmentIds     []string             `json:"segment_ids"`
	UpdatedAt      *string              `json:"updated_at"`
	Version        *int64               `json:"version"`
}
