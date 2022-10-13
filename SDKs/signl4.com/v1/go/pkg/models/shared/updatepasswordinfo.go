package shared

type UpdatePasswordInfo struct {
	CurrentPassword *string `json:"currentPassword"`
	NewPassword     *string `json:"newPassword"`
}
