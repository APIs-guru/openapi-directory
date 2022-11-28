package shared

// OptionalClaims
// Specifying the claims to be included in the token.
type OptionalClaims struct {
	AccessToken []OptionalClaim `json:"accessToken,omitempty"`
	IDToken     []OptionalClaim `json:"idToken,omitempty"`
	SamlToken   []OptionalClaim `json:"samlToken,omitempty"`
}
