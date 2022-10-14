package shared

type LiabilitiesGetRequest struct {
	AccessToken string                        `json:"access_token"`
	ClientID    *string                       `json:"client_id,omitempty"`
	Options     *LiabilitiesGetRequestOptions `json:"options,omitempty"`
	Secret      *string                       `json:"secret,omitempty"`
}
