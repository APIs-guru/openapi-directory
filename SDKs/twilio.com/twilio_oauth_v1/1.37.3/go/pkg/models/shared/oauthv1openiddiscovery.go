package shared

type OauthV1OpenidDiscovery struct {
	AuthorizationEndpoint            *string  `json:"authorization_endpoint,omitempty"`
	ClaimsSupported                  []string `json:"claims_supported,omitempty"`
	DeviceAuthorizationEndpoint      *string  `json:"device_authorization_endpoint,omitempty"`
	IDTokenSigningAlgValuesSupported []string `json:"id_token_signing_alg_values_supported,omitempty"`
	Issuer                           *string  `json:"issuer,omitempty"`
	JwkURI                           *string  `json:"jwk_uri,omitempty"`
	ResponseTypeSupported            []string `json:"response_type_supported,omitempty"`
	RevocationEndpoint               *string  `json:"revocation_endpoint,omitempty"`
	ScopesSupported                  []string `json:"scopes_supported,omitempty"`
	SubjectTypeSupported             []string `json:"subject_type_supported,omitempty"`
	TokenEndpoint                    *string  `json:"token_endpoint,omitempty"`
	URL                              *string  `json:"url,omitempty"`
	UserinfoEndpoint                 *string  `json:"userinfo_endpoint,omitempty"`
}
