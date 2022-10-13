package shared

import (
	"time"
)

type AutopilotV1AssistantFieldTypeFieldValue struct {
	AccountSid   *string    `json:"account_sid"`
	AssistantSid *string    `json:"assistant_sid"`
	DateCreated  *time.Time `json:"date_created"`
	DateUpdated  *time.Time `json:"date_updated"`
	FieldTypeSid *string    `json:"field_type_sid"`
	Language     *string    `json:"language"`
	Sid          *string    `json:"sid"`
	SynonymOf    *string    `json:"synonym_of"`
	URL          *string    `json:"url"`
	Value        *string    `json:"value"`
}
