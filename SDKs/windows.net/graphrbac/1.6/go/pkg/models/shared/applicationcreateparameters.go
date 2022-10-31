package shared



type ApplicationCreateParameters struct {
    AllowGuestsSignIn *bool `json:"allowGuestsSignIn,omitempty"`
    AllowPassthroughUsers *bool `json:"allowPassthroughUsers,omitempty"`
    AppLogoURL *string `json:"appLogoUrl,omitempty"`
    AppPermissions []string `json:"appPermissions,omitempty"`
    AppRoles []AppRole `json:"appRoles,omitempty"`
    AvailableToOtherTenants *bool `json:"availableToOtherTenants,omitempty"`
    DisplayName string `json:"displayName"`
    ErrorURL *string `json:"errorUrl,omitempty"`
    GroupMembershipClaims *GroupMembershipClaimsEnum `json:"groupMembershipClaims,omitempty"`
    Homepage *string `json:"homepage,omitempty"`
    IdentifierUris []string `json:"identifierUris,omitempty"`
    InformationalUrls *InformationalURL `json:"informationalUrls,omitempty"`
    IsDeviceOnlyAuthSupported *bool `json:"isDeviceOnlyAuthSupported,omitempty"`
    KeyCredentials []map[string]map[string]interface{} `json:"keyCredentials,omitempty"`
    KnownClientApplications []string `json:"knownClientApplications,omitempty"`
    LogoutURL *string `json:"logoutUrl,omitempty"`
    Oauth2AllowImplicitFlow *bool `json:"oauth2AllowImplicitFlow,omitempty"`
    Oauth2AllowURLPathMatching *bool `json:"oauth2AllowUrlPathMatching,omitempty"`
    Oauth2Permissions []OAuth2Permission `json:"oauth2Permissions,omitempty"`
    Oauth2RequirePostResponse *bool `json:"oauth2RequirePostResponse,omitempty"`
    OptionalClaims *OptionalClaims `json:"optionalClaims,omitempty"`
    OrgRestrictions []string `json:"orgRestrictions,omitempty"`
    PasswordCredentials []map[string]map[string]interface{} `json:"passwordCredentials,omitempty"`
    PreAuthorizedApplications []PreAuthorizedApplication `json:"preAuthorizedApplications,omitempty"`
    PublicClient *bool `json:"publicClient,omitempty"`
    PublisherDomain *string `json:"publisherDomain,omitempty"`
    ReplyUrls []string `json:"replyUrls,omitempty"`
    RequiredResourceAccess []map[string]map[string]interface{} `json:"requiredResourceAccess,omitempty"`
    SamlMetadataURL *string `json:"samlMetadataUrl,omitempty"`
    SignInAudience *string `json:"signInAudience,omitempty"`
    WwwHomepage *string `json:"wwwHomepage,omitempty"`
    
}

