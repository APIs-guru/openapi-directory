package shared

type OptionalClaims struct {
	AccessToken []OptionalClaim `json:"accessToken"`
	IDToken     []OptionalClaim `json:"idToken"`
	SamlToken   []OptionalClaim `json:"samlToken"`
}
