package shared

type ApplicationCreateParameters struct {
	AllowGuestsSignIn          *bool                               `json:"allowGuestsSignIn"`
	AllowPassthroughUsers      *bool                               `json:"allowPassthroughUsers"`
	AppLogoURL                 *string                             `json:"appLogoUrl"`
	AppPermissions             []string                            `json:"appPermissions"`
	AppRoles                   []AppRole                           `json:"appRoles"`
	AvailableToOtherTenants    *bool                               `json:"availableToOtherTenants"`
	DisplayName                string                              `json:"displayName"`
	ErrorURL                   *string                             `json:"errorUrl"`
	GroupMembershipClaims      *GroupMembershipClaimsEnum          `json:"groupMembershipClaims"`
	Homepage                   *string                             `json:"homepage"`
	IdentifierUris             []string                            `json:"identifierUris"`
	InformationalUrls          *InformationalURL                   `json:"informationalUrls"`
	IsDeviceOnlyAuthSupported  *bool                               `json:"isDeviceOnlyAuthSupported"`
	KeyCredentials             []map[string]map[string]interface{} `json:"keyCredentials"`
	KnownClientApplications    []string                            `json:"knownClientApplications"`
	LogoutURL                  *string                             `json:"logoutUrl"`
	Oauth2AllowImplicitFlow    *bool                               `json:"oauth2AllowImplicitFlow"`
	Oauth2AllowURLPathMatching *bool                               `json:"oauth2AllowUrlPathMatching"`
	Oauth2Permissions          []OAuth2Permission                  `json:"oauth2Permissions"`
	Oauth2RequirePostResponse  *bool                               `json:"oauth2RequirePostResponse"`
	OptionalClaims             *OptionalClaims                     `json:"optionalClaims"`
	OrgRestrictions            []string                            `json:"orgRestrictions"`
	PasswordCredentials        []map[string]map[string]interface{} `json:"passwordCredentials"`
	PreAuthorizedApplications  []PreAuthorizedApplication          `json:"preAuthorizedApplications"`
	PublicClient               *bool                               `json:"publicClient"`
	PublisherDomain            *string                             `json:"publisherDomain"`
	ReplyUrls                  []string                            `json:"replyUrls"`
	RequiredResourceAccess     []map[string]map[string]interface{} `json:"requiredResourceAccess"`
	SamlMetadataURL            *string                             `json:"samlMetadataUrl"`
	SignInAudience             *string                             `json:"signInAudience"`
	WwwHomepage                *string                             `json:"wwwHomepage"`
}
