package shared

type Credentials struct {
	APIKey   *string `json:"apiKey,omitempty"`
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
