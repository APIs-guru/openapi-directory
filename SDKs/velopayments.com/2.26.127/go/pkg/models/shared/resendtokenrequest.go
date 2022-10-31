package shared

type ResendTokenRequestTokenTypeEnum string

const (
	ResendTokenRequestTokenTypeEnumInviteMfaUser   ResendTokenRequestTokenTypeEnum = "INVITE_MFA_USER"
	ResendTokenRequestTokenTypeEnumMfaRegistration ResendTokenRequestTokenTypeEnum = "MFA_REGISTRATION"
)

type ResendTokenRequest struct {
	TokenType        ResendTokenRequestTokenTypeEnum `json:"tokenType"`
	VerificationCode *string                         `json:"verificationCode,omitempty"`
}
