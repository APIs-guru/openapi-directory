package shared



type CatalogInfoResponse struct {
    Errors []Error `json:"errors,omitempty"`
    Limits *CatalogInfoResponseLimits `json:"limits,omitempty"`
    StandardUnitDescriptionGroup *StandardUnitDescriptionGroup `json:"standard_unit_description_group,omitempty"`
    
}

