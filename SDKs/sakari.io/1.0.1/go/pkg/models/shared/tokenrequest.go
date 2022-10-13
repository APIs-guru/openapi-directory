package shared

type TokenRequest struct {
	ClientID     *string `json:"client_id"`
	ClientSecret *string `json:"client_secret"`
	GrantType    *string `json:"grant_type"`
}
