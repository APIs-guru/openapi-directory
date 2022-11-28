package shared

// ClientCredentialsResponse
// The Client Credentials Response Model
type ClientCredentialsResponse struct {
	ClientSecret               *string `json:"clientSecret,omitempty"`
	ClientSecretExpirationDate *string `json:"clientSecretExpirationDate,omitempty"`
}
