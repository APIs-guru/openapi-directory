package shared



type EmergencyContact struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName string `json:"firstName"`
    HomePhone *string `json:"homePhone,omitempty"`
    LastName string `json:"lastName"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Pager *string `json:"pager,omitempty"`
    PrimaryPhone *string `json:"primaryPhone,omitempty"`
    Priority *string `json:"priority,omitempty"`
    Relationship *string `json:"relationship,omitempty"`
    State *string `json:"state,omitempty"`
    SyncEmployeeInfo *bool `json:"syncEmployeeInfo,omitempty"`
    WorkExtension *string `json:"workExtension,omitempty"`
    WorkPhone *string `json:"workPhone,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

