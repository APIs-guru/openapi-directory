package shared

type MfaTypeEnum string

const (
	MfaTypeEnumSms     MfaTypeEnum = "SMS"
	MfaTypeEnumYubikey MfaTypeEnum = "YUBIKEY"
	MfaTypeEnumTotp    MfaTypeEnum = "TOTP"
)
