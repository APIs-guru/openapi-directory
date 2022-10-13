package shared

type LinkTokenGetRequest struct {
	ClientID  *string `json:"client_id"`
	LinkToken string  `json:"link_token"`
	Secret    *string `json:"secret"`
}
