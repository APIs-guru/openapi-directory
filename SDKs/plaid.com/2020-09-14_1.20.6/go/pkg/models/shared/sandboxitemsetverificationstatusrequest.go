package shared

type SandboxItemSetVerificationStatusRequestVerificationStatusEnum string

const (
	SandboxItemSetVerificationStatusRequestVerificationStatusEnumAutomaticallyVerified SandboxItemSetVerificationStatusRequestVerificationStatusEnum = "automatically_verified"
	SandboxItemSetVerificationStatusRequestVerificationStatusEnumVerificationExpired   SandboxItemSetVerificationStatusRequestVerificationStatusEnum = "verification_expired"
)

type SandboxItemSetVerificationStatusRequest struct {
	AccessToken        string                                                        `json:"access_token"`
	AccountID          string                                                        `json:"account_id"`
	ClientID           *string                                                       `json:"client_id"`
	Secret             *string                                                       `json:"secret"`
	VerificationStatus SandboxItemSetVerificationStatusRequestVerificationStatusEnum `json:"verification_status"`
}
