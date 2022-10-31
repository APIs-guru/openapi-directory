package shared



type AlertReport struct {
    Last24Hours *AlertCounts `json:"last24Hours,omitempty"`
    SubscriptionID *string `json:"subscriptionId,omitempty"`
    TeamCurrentDuty *AlertCounts `json:"teamCurrentDuty,omitempty"`
    TeamID *string `json:"teamId,omitempty"`
    TeamLastDuty *AlertCounts `json:"teamLastDuty,omitempty"`
    UserID *string `json:"userId,omitempty"`
    UserLastDutyChange *AlertCounts `json:"userLastDutyChange,omitempty"`
    
}

