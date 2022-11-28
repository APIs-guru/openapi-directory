package shared

// RegionRestrictions
// This class defines an entitlement data on the Publish API
type RegionRestrictions struct {
	Allowed []string `json:"allowed,omitempty"`
}
