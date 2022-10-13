package shared

type LiabilitiesGetRequest struct {
	AccessToken string                        `json:"access_token"`
	ClientID    *string                       `json:"client_id"`
	Options     *LiabilitiesGetRequestOptions `json:"options"`
	Secret      *string                       `json:"secret"`
}
