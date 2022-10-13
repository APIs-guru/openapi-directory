package shared

type ItemGetRequest struct {
	AccessToken string  `json:"access_token"`
	ClientID    *string `json:"client_id"`
	Secret      *string `json:"secret"`
}
