package shared

// ValidatedUser
// list of users with their workflow settings
type ValidatedUser struct {
	IsValidated bool   `json:"isValidated"`
	UserExists  bool   `json:"userExists"`
	Username    string `json:"username"`
}
