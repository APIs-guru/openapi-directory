package shared

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
