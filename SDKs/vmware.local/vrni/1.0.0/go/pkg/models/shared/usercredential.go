package shared

type UserCredential struct {
	Domain   *Domain `json:"domain"`
	Password *string `json:"password"`
	Username *string `json:"username"`
}
