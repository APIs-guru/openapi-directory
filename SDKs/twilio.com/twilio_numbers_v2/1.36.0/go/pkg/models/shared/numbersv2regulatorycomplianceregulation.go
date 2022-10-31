package shared



type NumbersV2RegulatoryComplianceRegulation struct {
    EndUserType *RegulationEnumEndUserTypeEnum `json:"end_user_type,omitempty"`
    FriendlyName *string `json:"friendly_name,omitempty"`
    IsoCountry *string `json:"iso_country,omitempty"`
    NumberType *string `json:"number_type,omitempty"`
    Requirements *interface{} `json:"requirements,omitempty"`
    Sid *string `json:"sid,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

