package shared



type PayorBrandingResponse struct {
    CollectiveAlias *string `json:"collectiveAlias,omitempty"`
    DbaName *string `json:"dbaName,omitempty"`
    LogoURL string `json:"logoUrl"`
    PayorName string `json:"payorName"`
    SupportContact *string `json:"supportContact,omitempty"`
    
}

