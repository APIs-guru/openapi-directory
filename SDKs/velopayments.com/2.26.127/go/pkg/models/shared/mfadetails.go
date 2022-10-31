package shared

type MfaDetails struct {
	MfaType  *MfaTypeEnum `json:"mfa_type,omitempty"`
	Verified *bool        `json:"verified,omitempty"`
}
