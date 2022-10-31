package shared



type ValidatedUser struct {
    IsValidated bool `json:"isValidated"`
    UserExists bool `json:"userExists"`
    Username string `json:"username"`
    
}

