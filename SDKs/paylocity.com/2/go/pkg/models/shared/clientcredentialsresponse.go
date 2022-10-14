package shared

type ClientCredentialsResponse struct {
	ClientSecret               *string `json:"clientSecret,omitempty"`
	ClientSecretExpirationDate *string `json:"clientSecretExpirationDate,omitempty"`
}
