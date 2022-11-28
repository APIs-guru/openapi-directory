package shared

import (
	"time"
)

// CreateBehaviorInput
// Represents paramaters required to give behavior feedback
type CreateBehaviorInput struct {
	BirthDate    time.Time   `form:"name=birth_date"`
	Country      interface{} `form:"name=country"`
	DocumentID   string      `form:"name=document_id"`
	DocumentType interface{} `form:"name=document_type"`
	Email        string      `form:"name=email"`
	FeedbackDate time.Time   `form:"name=feedback_date"`
	FirstName    string      `form:"name=first_name"`
	LastName     string      `form:"name=last_name"`
	PhoneNumber  *string     `form:"name=phone_number"`
	Reason       interface{} `form:"name=reason"`
}
