package shared



type ChangeAlertStatusMultipleInfo struct {
    AlertIds []string `json:"alertIds,omitempty"`
    Description *string `json:"description,omitempty"`
    UserID *string `json:"userId,omitempty"`
    
}

