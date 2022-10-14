package shared

type APIV2010AccountQueue struct {
	AccountSid      *string `json:"account_sid,omitempty"`
	AverageWaitTime *int64  `json:"average_wait_time,omitempty"`
	CurrentSize     *int64  `json:"current_size,omitempty"`
	DateCreated     *string `json:"date_created,omitempty"`
	DateUpdated     *string `json:"date_updated,omitempty"`
	FriendlyName    *string `json:"friendly_name,omitempty"`
	MaxSize         *int64  `json:"max_size,omitempty"`
	Sid             *string `json:"sid,omitempty"`
	URI             *string `json:"uri,omitempty"`
}
