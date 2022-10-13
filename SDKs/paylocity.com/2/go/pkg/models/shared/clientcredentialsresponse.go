package shared

type ClientCredentialsResponse struct {
	ClientSecret               *string `json:"clientSecret"`
	ClientSecretExpirationDate *string `json:"clientSecretExpirationDate"`
}
