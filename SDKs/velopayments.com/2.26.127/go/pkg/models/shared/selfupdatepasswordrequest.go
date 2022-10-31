package shared



type SelfUpdatePasswordRequest struct {
    NewPassword string `json:"newPassword"`
    OldPassword string `json:"oldPassword"`
    
}

