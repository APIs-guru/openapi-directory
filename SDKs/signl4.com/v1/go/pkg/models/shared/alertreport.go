package shared

type AlertReport struct {
	Last24Hours        *AlertCounts `json:"last24Hours"`
	SubscriptionID     *string      `json:"subscriptionId"`
	TeamCurrentDuty    *AlertCounts `json:"teamCurrentDuty"`
	TeamID             *string      `json:"teamId"`
	TeamLastDuty       *AlertCounts `json:"teamLastDuty"`
	UserID             *string      `json:"userId"`
	UserLastDutyChange *AlertCounts `json:"userLastDutyChange"`
}
