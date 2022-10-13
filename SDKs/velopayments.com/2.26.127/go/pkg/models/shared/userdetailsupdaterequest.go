package shared

type UserDetailsUpdateRequest struct {
	Email                  *string      `json:"email"`
	FirstName              *string      `json:"firstName"`
	LastName               *string      `json:"lastName"`
	MfaType                *MfaTypeEnum `json:"mfaType"`
	PrimaryContactNumber   *string      `json:"primaryContactNumber"`
	SecondaryContactNumber *string      `json:"secondaryContactNumber"`
	SmsNumber              *string      `json:"smsNumber"`
	VerificationCode       *string      `json:"verificationCode"`
}
