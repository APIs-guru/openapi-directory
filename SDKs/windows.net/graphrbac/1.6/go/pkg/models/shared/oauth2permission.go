package shared

type OAuth2Permission struct {
	AdminConsentDescription *string `json:"adminConsentDescription"`
	AdminConsentDisplayName *string `json:"adminConsentDisplayName"`
	ID                      *string `json:"id"`
	IsEnabled               *bool   `json:"isEnabled"`
	Type                    *string `json:"type"`
	UserConsentDescription  *string `json:"userConsentDescription"`
	UserConsentDisplayName  *string `json:"userConsentDisplayName"`
	Value                   *string `json:"value"`
}
