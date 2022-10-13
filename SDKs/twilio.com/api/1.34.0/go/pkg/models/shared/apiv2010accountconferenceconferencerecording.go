package shared

type APIV2010AccountConferenceConferenceRecording struct {
	AccountSid        *string                            `json:"account_sid"`
	APIVersion        *string                            `json:"api_version"`
	CallSid           *string                            `json:"call_sid"`
	Channels          *int64                             `json:"channels"`
	ConferenceSid     *string                            `json:"conference_sid"`
	DateCreated       *string                            `json:"date_created"`
	DateUpdated       *string                            `json:"date_updated"`
	Duration          *string                            `json:"duration"`
	EncryptionDetails *interface{}                       `json:"encryption_details"`
	ErrorCode         *int64                             `json:"error_code"`
	Price             *string                            `json:"price"`
	PriceUnit         *string                            `json:"price_unit"`
	Sid               *string                            `json:"sid"`
	Source            *ConferenceRecordingEnumSourceEnum `json:"source"`
	StartTime         *string                            `json:"start_time"`
	Status            *ConferenceRecordingEnumStatusEnum `json:"status"`
	URI               *string                            `json:"uri"`
}
