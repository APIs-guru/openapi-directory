package shared

type FrontlineV1User struct {
	Avatar       *string                `json:"avatar"`
	FriendlyName *string                `json:"friendly_name"`
	Identity     *string                `json:"identity"`
	IsAvailable  *bool                  `json:"is_available"`
	Sid          *string                `json:"sid"`
	State        *UserEnumStateTypeEnum `json:"state"`
	URL          *string                `json:"url"`
}
