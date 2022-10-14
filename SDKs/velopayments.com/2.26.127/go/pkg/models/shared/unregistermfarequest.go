package shared

type UnregisterMfaRequestMfaTypeEnum string

const (
	UnregisterMfaRequestMfaTypeEnumYubikey UnregisterMfaRequestMfaTypeEnum = "YUBIKEY"
	UnregisterMfaRequestMfaTypeEnumTotp    UnregisterMfaRequestMfaTypeEnum = "TOTP"
)

type UnregisterMfaRequest struct {
	MfaType          UnregisterMfaRequestMfaTypeEnum `json:"mfaType"`
	VerificationCode *string                         `json:"verificationCode,omitempty"`
}
