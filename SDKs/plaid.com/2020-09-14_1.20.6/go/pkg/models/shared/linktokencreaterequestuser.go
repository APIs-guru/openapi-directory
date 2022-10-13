package shared

import (
	"time"
)

type LinkTokenCreateRequestUser struct {
	ClientUserID             string     `json:"client_user_id"`
	DateOfBirth              *time.Time `json:"date_of_birth"`
	EmailAddress             *string    `json:"email_address"`
	EmailAddressVerifiedTime *time.Time `json:"email_address_verified_time"`
	LegalName                *string    `json:"legal_name"`
	PhoneNumber              *string    `json:"phone_number"`
	PhoneNumberVerifiedTime  *time.Time `json:"phone_number_verified_time"`
	Ssn                      *string    `json:"ssn"`
}
