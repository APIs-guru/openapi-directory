package shared

type OptionalClaims struct {
	AccessToken []OptionalClaim `json:"accessToken,omitempty"`
	IDToken     []OptionalClaim `json:"idToken,omitempty"`
	SamlToken   []OptionalClaim `json:"samlToken,omitempty"`
}
