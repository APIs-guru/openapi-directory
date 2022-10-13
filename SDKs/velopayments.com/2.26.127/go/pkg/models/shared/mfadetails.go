package shared

type MfaDetails struct {
	MfaType  *MfaTypeEnum `json:"mfa_type"`
	Verified *bool        `json:"verified"`
}
