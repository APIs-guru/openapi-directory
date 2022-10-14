package shared

type Users struct {
	IsPreHahed *bool    `json:"isPreHahed,omitempty"`
	Password   *string  `json:"password,omitempty"`
	Role       []string `json:"role,omitempty"`
	Username   *string  `json:"username,omitempty"`
}
