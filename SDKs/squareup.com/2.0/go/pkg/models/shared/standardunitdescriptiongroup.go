package shared



type StandardUnitDescriptionGroup struct {
    LanguageCode *string `json:"language_code,omitempty"`
    StandardUnitDescriptions []StandardUnitDescription `json:"standard_unit_descriptions,omitempty"`
    
}

