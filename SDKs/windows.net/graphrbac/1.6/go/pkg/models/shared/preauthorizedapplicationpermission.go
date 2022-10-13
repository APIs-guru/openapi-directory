package shared

type PreAuthorizedApplicationPermission struct {
	AccessGrants      []string `json:"accessGrants"`
	DirectAccessGrant *bool    `json:"directAccessGrant"`
}
