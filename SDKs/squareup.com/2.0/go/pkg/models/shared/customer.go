package shared



type Customer struct {
    Address *Address `json:"address,omitempty"`
    Birthday *string `json:"birthday,omitempty"`
    Cards []Card `json:"cards,omitempty"`
    CompanyName *string `json:"company_name,omitempty"`
    CreatedAt *string `json:"created_at,omitempty"`
    CreationSource *string `json:"creation_source,omitempty"`
    EmailAddress *string `json:"email_address,omitempty"`
    FamilyName *string `json:"family_name,omitempty"`
    GivenName *string `json:"given_name,omitempty"`
    GroupIds []string `json:"group_ids,omitempty"`
    ID *string `json:"id,omitempty"`
    Nickname *string `json:"nickname,omitempty"`
    Note *string `json:"note,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    Preferences *CustomerPreferences `json:"preferences,omitempty"`
    ReferenceID *string `json:"reference_id,omitempty"`
    SegmentIds []string `json:"segment_ids,omitempty"`
    UpdatedAt *string `json:"updated_at,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

