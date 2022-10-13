package shared

type Credentials struct {
	APIKey   *string `json:"apiKey"`
	Password *string `json:"password"`
	Username *string `json:"username"`
}
