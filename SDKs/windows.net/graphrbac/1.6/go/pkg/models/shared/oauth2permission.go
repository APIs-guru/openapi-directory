package shared

// OAuth2Permission
// Represents an OAuth 2.0 delegated permission scope. The specified OAuth 2.0 delegated permission scopes may be requested by client applications (through the requiredResourceAccess collection on the Application object) when calling a resource application. The oauth2Permissions property of the ServicePrincipal entity and of the Application entity is a collection of OAuth2Permission.
type OAuth2Permission struct {
	AdminConsentDescription *string `json:"adminConsentDescription,omitempty"`
	AdminConsentDisplayName *string `json:"adminConsentDisplayName,omitempty"`
	ID                      *string `json:"id,omitempty"`
	IsEnabled               *bool   `json:"isEnabled,omitempty"`
	Type                    *string `json:"type,omitempty"`
	UserConsentDescription  *string `json:"userConsentDescription,omitempty"`
	UserConsentDisplayName  *string `json:"userConsentDisplayName,omitempty"`
	Value                   *string `json:"value,omitempty"`
}
