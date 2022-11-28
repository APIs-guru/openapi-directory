package shared

// PreAuthorizedApplicationPermission
// Contains information about the pre-authorized permissions.
type PreAuthorizedApplicationPermission struct {
	AccessGrants      []string `json:"accessGrants,omitempty"`
	DirectAccessGrant *bool    `json:"directAccessGrant,omitempty"`
}
