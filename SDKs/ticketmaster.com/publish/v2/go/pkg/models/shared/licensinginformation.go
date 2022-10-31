package shared



type LicensingInformation struct {
    License string `json:"license"`
    RegionRestriction *RegionRestrictions `json:"regionRestriction,omitempty"`
    
}

