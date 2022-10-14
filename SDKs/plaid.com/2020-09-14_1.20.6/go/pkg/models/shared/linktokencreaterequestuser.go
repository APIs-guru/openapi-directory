package shared

import (
	"time"
)

type LinkTokenCreateRequestUser struct {
	ClientUserID             string     `json:"client_user_id"`
	DateOfBirth              *time.Time `json:"date_of_birth,omitempty"`
	EmailAddress             *string    `json:"email_address,omitempty"`
	EmailAddressVerifiedTime *time.Time `json:"email_address_verified_time,omitempty"`
	LegalName                *string    `json:"legal_name,omitempty"`
	PhoneNumber              *string    `json:"phone_number,omitempty"`
	PhoneNumberVerifiedTime  *time.Time `json:"phone_number_verified_time,omitempty"`
	Ssn                      *string    `json:"ssn,omitempty"`
}
