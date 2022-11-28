package shared

import (
	"time"
)

type PreviewUnderstandAssistantFieldTypeFieldValue struct {
	AccountSid   *string    `json:"account_sid,omitempty"`
	AssistantSid *string    `json:"assistant_sid,omitempty"`
	DateCreated  *time.Time `json:"date_created,omitempty"`
	DateUpdated  *time.Time `json:"date_updated,omitempty"`
	FieldTypeSid *string    `json:"field_type_sid,omitempty"`
	Language     *string    `json:"language,omitempty"`
	Sid          *string    `json:"sid,omitempty"`
	SynonymOf    *string    `json:"synonym_of,omitempty"`
	URL          *string    `json:"url,omitempty"`
	Value        *string    `json:"value,omitempty"`
}
