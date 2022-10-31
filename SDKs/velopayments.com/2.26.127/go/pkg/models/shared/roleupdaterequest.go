package shared



type RoleUpdateRequest struct {
    Roles []string `json:"roles"`
    VerificationCode *string `json:"verificationCode,omitempty"`
    
}

