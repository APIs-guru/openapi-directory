package shared

type ServicePrincipalCreateParameters struct {
	AccountEnabled            *bool                               `json:"accountEnabled,omitempty"`
	AppID                     string                              `json:"appId"`
	AppRoleAssignmentRequired *bool                               `json:"appRoleAssignmentRequired,omitempty"`
	KeyCredentials            []map[string]map[string]interface{} `json:"keyCredentials,omitempty"`
	PasswordCredentials       []map[string]map[string]interface{} `json:"passwordCredentials,omitempty"`
	ServicePrincipalType      *string                             `json:"servicePrincipalType,omitempty"`
	Tags                      []string                            `json:"tags,omitempty"`
}
