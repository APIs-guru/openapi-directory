package shared

// UserDetailsUpdateRequest
// <p>All properties are optional</p>
// <p>Only provided properties will be updated</p>
// <p>Use null to null out a property that is allowed to be nullable</p>
type UserDetailsUpdateRequest struct {
	Email                  *string      `json:"email,omitempty"`
	FirstName              *string      `json:"firstName,omitempty"`
	LastName               *string      `json:"lastName,omitempty"`
	MfaType                *MfaTypeEnum `json:"mfaType,omitempty"`
	PrimaryContactNumber   *string      `json:"primaryContactNumber,omitempty"`
	SecondaryContactNumber *string      `json:"secondaryContactNumber,omitempty"`
	SmsNumber              *string      `json:"smsNumber,omitempty"`
	VerificationCode       *string      `json:"verificationCode,omitempty"`
}
