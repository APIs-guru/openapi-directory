package shared

type ServicePrincipalUpdateParameters struct {
	AccountEnabled            *bool                               `json:"accountEnabled"`
	AppRoleAssignmentRequired *bool                               `json:"appRoleAssignmentRequired"`
	KeyCredentials            []map[string]map[string]interface{} `json:"keyCredentials"`
	PasswordCredentials       []map[string]map[string]interface{} `json:"passwordCredentials"`
	ServicePrincipalType      *string                             `json:"servicePrincipalType"`
	Tags                      []string                            `json:"tags"`
}
