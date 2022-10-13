package shared

type Users struct {
	IsPreHahed *bool    `json:"isPreHahed"`
	Password   *string  `json:"password"`
	Role       []string `json:"role"`
	Username   *string  `json:"username"`
}
