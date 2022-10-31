package shared

type FrontlineV1User struct {
	Avatar       *string                `json:"avatar,omitempty"`
	FriendlyName *string                `json:"friendly_name,omitempty"`
	Identity     *string                `json:"identity,omitempty"`
	IsAvailable  *bool                  `json:"is_available,omitempty"`
	Sid          *string                `json:"sid,omitempty"`
	State        *UserEnumStateTypeEnum `json:"state,omitempty"`
	URL          *string                `json:"url,omitempty"`
}
