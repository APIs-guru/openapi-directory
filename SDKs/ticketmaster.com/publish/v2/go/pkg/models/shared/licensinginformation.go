package shared

// LicensingInformation
// This class defines an entitlement data on the Publish API
type LicensingInformation struct {
	License           string              `json:"license"`
	RegionRestriction *RegionRestrictions `json:"regionRestriction,omitempty"`
}
