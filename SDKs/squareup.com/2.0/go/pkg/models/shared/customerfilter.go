package shared

type CustomerFilter struct {
	CreatedAt      *TimeRange                    `json:"created_at"`
	CreationSource *CustomerCreationSourceFilter `json:"creation_source"`
	EmailAddress   *CustomerTextFilter           `json:"email_address"`
	GroupIds       *FilterValue                  `json:"group_ids"`
	PhoneNumber    *CustomerTextFilter           `json:"phone_number"`
	ReferenceID    *CustomerTextFilter           `json:"reference_id"`
	UpdatedAt      *TimeRange                    `json:"updated_at"`
}
