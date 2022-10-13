package shared

type LoginDto struct {
	Password *string `json:"password"`
	Remember *bool   `json:"remember"`
	Username *string `json:"username"`
}
