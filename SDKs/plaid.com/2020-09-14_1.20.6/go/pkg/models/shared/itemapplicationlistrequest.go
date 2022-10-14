package shared

type ItemApplicationListRequest struct {
	AccessToken *string `json:"access_token,omitempty"`
	ClientID    *string `json:"client_id,omitempty"`
	Secret      *string `json:"secret,omitempty"`
}
