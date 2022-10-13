package shared

type APIV2010AccountRecordingRecordingTranscription struct {
	AccountSid        *string                               `json:"account_sid"`
	APIVersion        *string                               `json:"api_version"`
	DateCreated       *string                               `json:"date_created"`
	DateUpdated       *string                               `json:"date_updated"`
	Duration          *string                               `json:"duration"`
	Price             *float64                              `json:"price"`
	PriceUnit         *string                               `json:"price_unit"`
	RecordingSid      *string                               `json:"recording_sid"`
	Sid               *string                               `json:"sid"`
	Status            *RecordingTranscriptionEnumStatusEnum `json:"status"`
	TranscriptionText *string                               `json:"transcription_text"`
	Type              *string                               `json:"type"`
	URI               *string                               `json:"uri"`
}
