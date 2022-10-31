package shared

type UserCredential struct {
	Domain   *Domain `json:"domain,omitempty"`
	Password *string `json:"password,omitempty"`
	Username *string `json:"username,omitempty"`
}
