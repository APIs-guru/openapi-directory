package shared



type UpdatePasswordInfo struct {
    CurrentPassword *string `json:"currentPassword,omitempty"`
    NewPassword *string `json:"newPassword,omitempty"`
    
}

