package shared




type SelfMfaTypeUnregisterRequestMfaTypeEnum string

const (
    SelfMfaTypeUnregisterRequestMfaTypeEnumSms SelfMfaTypeUnregisterRequestMfaTypeEnum = "SMS"
SelfMfaTypeUnregisterRequestMfaTypeEnumYubikey SelfMfaTypeUnregisterRequestMfaTypeEnum = "YUBIKEY"
SelfMfaTypeUnregisterRequestMfaTypeEnumTotp SelfMfaTypeUnregisterRequestMfaTypeEnum = "TOTP"
)


type SelfMfaTypeUnregisterRequest struct {
    MfaType SelfMfaTypeUnregisterRequestMfaTypeEnum `json:"mfaType"`
    
}

