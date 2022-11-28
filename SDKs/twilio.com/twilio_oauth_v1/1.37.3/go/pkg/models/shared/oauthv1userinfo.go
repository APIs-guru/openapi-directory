package shared

type OauthV1UserInfo struct {
	Email        *string `json:"email,omitempty"`
	FirstName    *string `json:"first_name,omitempty"`
	FriendlyName *string `json:"friendly_name,omitempty"`
	LastName     *string `json:"last_name,omitempty"`
	URL          *string `json:"url,omitempty"`
	UserSid      *string `json:"user_sid,omitempty"`
}
