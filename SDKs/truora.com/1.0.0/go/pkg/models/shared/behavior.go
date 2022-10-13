package shared

import (
	"time"
)

type Behavior struct {
	BirthDate    time.Time   `json:"birth_date"`
	Country      interface{} `json:"country"`
	CreationDate *time.Time  `json:"creation_date"`
	DocumentID   string      `json:"document_id"`
	DocumentType interface{} `json:"document_type"`
	Email        string      `json:"email"`
	FeedbackDate time.Time   `json:"feedback_date"`
	FirstName    string      `json:"first_name"`
	LastName     string      `json:"last_name"`
	PhoneNumber  *string     `json:"phone_number"`
	Reason       string      `json:"reason"`
}
