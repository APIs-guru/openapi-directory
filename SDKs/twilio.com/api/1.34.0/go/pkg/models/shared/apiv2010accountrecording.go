package shared

type APIV2010AccountRecording struct {
	AccountSid        *string                  `json:"account_sid"`
	APIVersion        *string                  `json:"api_version"`
	CallSid           *string                  `json:"call_sid"`
	Channels          *int64                   `json:"channels"`
	ConferenceSid     *string                  `json:"conference_sid"`
	DateCreated       *string                  `json:"date_created"`
	DateUpdated       *string                  `json:"date_updated"`
	Duration          *string                  `json:"duration"`
	EncryptionDetails *interface{}             `json:"encryption_details"`
	ErrorCode         *int64                   `json:"error_code"`
	MediaURL          *string                  `json:"media_url"`
	Price             *string                  `json:"price"`
	PriceUnit         *string                  `json:"price_unit"`
	Sid               *string                  `json:"sid"`
	Source            *RecordingEnumSourceEnum `json:"source"`
	StartTime         *string                  `json:"start_time"`
	Status            *RecordingEnumStatusEnum `json:"status"`
	SubresourceUris   map[string]interface{}   `json:"subresource_uris"`
	URI               *string                  `json:"uri"`
}
