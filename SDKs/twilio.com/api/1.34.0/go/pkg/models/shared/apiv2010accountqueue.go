package shared

type APIV2010AccountQueue struct {
	AccountSid      *string `json:"account_sid"`
	AverageWaitTime *int64  `json:"average_wait_time"`
	CurrentSize     *int64  `json:"current_size"`
	DateCreated     *string `json:"date_created"`
	DateUpdated     *string `json:"date_updated"`
	FriendlyName    *string `json:"friendly_name"`
	MaxSize         *int64  `json:"max_size"`
	Sid             *string `json:"sid"`
	URI             *string `json:"uri"`
}
