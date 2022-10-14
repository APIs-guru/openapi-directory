package shared

type TokenRequest struct {
	ClientID     *string `json:"client_id,omitempty"`
	ClientSecret *string `json:"client_secret,omitempty"`
	GrantType    *string `json:"grant_type,omitempty"`
}
