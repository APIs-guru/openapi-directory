package shared

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
