package shared



type PreAuthorizedApplicationPermission struct {
    AccessGrants []string `json:"accessGrants,omitempty"`
    DirectAccessGrant *bool `json:"directAccessGrant,omitempty"`
    
}

