package shared

type LoginDto struct {
	Password *string `json:"password,omitempty"`
	Remember *bool   `json:"remember,omitempty"`
	Username *string `json:"username,omitempty"`
}
