package shared

type APIV2010AccountRecordingRecordingTranscription struct {
	AccountSid        *string                               `json:"account_sid,omitempty"`
	APIVersion        *string                               `json:"api_version,omitempty"`
	DateCreated       *string                               `json:"date_created,omitempty"`
	DateUpdated       *string                               `json:"date_updated,omitempty"`
	Duration          *string                               `json:"duration,omitempty"`
	Price             *float64                              `json:"price,omitempty"`
	PriceUnit         *string                               `json:"price_unit,omitempty"`
	RecordingSid      *string                               `json:"recording_sid,omitempty"`
	Sid               *string                               `json:"sid,omitempty"`
	Status            *RecordingTranscriptionEnumStatusEnum `json:"status,omitempty"`
	TranscriptionText *string                               `json:"transcription_text,omitempty"`
	Type              *string                               `json:"type,omitempty"`
	URI               *string                               `json:"uri,omitempty"`
}
