package shared

type APIV2010AccountCallCallRecording struct {
	AccountSid        *string                      `json:"account_sid,omitempty"`
	APIVersion        *string                      `json:"api_version,omitempty"`
	CallSid           *string                      `json:"call_sid,omitempty"`
	Channels          *int64                       `json:"channels,omitempty"`
	ConferenceSid     *string                      `json:"conference_sid,omitempty"`
	DateCreated       *string                      `json:"date_created,omitempty"`
	DateUpdated       *string                      `json:"date_updated,omitempty"`
	Duration          *string                      `json:"duration,omitempty"`
	EncryptionDetails *interface{}                 `json:"encryption_details,omitempty"`
	ErrorCode         *int64                       `json:"error_code,omitempty"`
	Price             *float64                     `json:"price,omitempty"`
	PriceUnit         *string                      `json:"price_unit,omitempty"`
	Sid               *string                      `json:"sid,omitempty"`
	Source            *CallRecordingEnumSourceEnum `json:"source,omitempty"`
	StartTime         *string                      `json:"start_time,omitempty"`
	Status            *CallRecordingEnumStatusEnum `json:"status,omitempty"`
	Track             *string                      `json:"track,omitempty"`
	URI               *string                      `json:"uri,omitempty"`
}
