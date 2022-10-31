package shared



type CustomerFilter struct {
    CreatedAt *TimeRange `json:"created_at,omitempty"`
    CreationSource *CustomerCreationSourceFilter `json:"creation_source,omitempty"`
    EmailAddress *CustomerTextFilter `json:"email_address,omitempty"`
    GroupIds *FilterValue `json:"group_ids,omitempty"`
    PhoneNumber *CustomerTextFilter `json:"phone_number,omitempty"`
    ReferenceID *CustomerTextFilter `json:"reference_id,omitempty"`
    UpdatedAt *TimeRange `json:"updated_at,omitempty"`
    
}

