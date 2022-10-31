package shared

type InviteUserRequestMfaTypeEnum string

const (
	InviteUserRequestMfaTypeEnumSms     InviteUserRequestMfaTypeEnum = "SMS"
	InviteUserRequestMfaTypeEnumYubikey InviteUserRequestMfaTypeEnum = "YUBIKEY"
	InviteUserRequestMfaTypeEnumTotp    InviteUserRequestMfaTypeEnum = "TOTP"
)

type InviteUserRequest struct {
	Email                  string                       `json:"email"`
	EntityID               *string                      `json:"entityId,omitempty"`
	FirstName              *string                      `json:"firstName,omitempty"`
	LastName               *string                      `json:"lastName,omitempty"`
	MfaType                InviteUserRequestMfaTypeEnum `json:"mfaType"`
	PrimaryContactNumber   string                       `json:"primaryContactNumber"`
	Roles                  []string                     `json:"roles"`
	SecondaryContactNumber *string                      `json:"secondaryContactNumber,omitempty"`
	SmsNumber              string                       `json:"smsNumber"`
	VerificationCode       *string                      `json:"verificationCode,omitempty"`
}
