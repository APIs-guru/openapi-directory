package shared

type BasicUser struct {
	Email     *string `json:"email"`
	FirstName *string `json:"first_name"`
	LastName  *string `json:"last_name"`
	LoginName *string `json:"login_name"`
}
