package shared



type UserInfo struct {
    MfaDetails *MfaDetails `json:"mfa_details,omitempty"`
    UserType *UserType2Enum `json:"userType,omitempty"`
    UserID *string `json:"user_id,omitempty"`
    
}

