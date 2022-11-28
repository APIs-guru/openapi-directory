package shared

type SandboxItemSetVerificationStatusRequestVerificationStatusEnum string

const (
	SandboxItemSetVerificationStatusRequestVerificationStatusEnumAutomaticallyVerified SandboxItemSetVerificationStatusRequestVerificationStatusEnum = "automatically_verified"
	SandboxItemSetVerificationStatusRequestVerificationStatusEnumVerificationExpired   SandboxItemSetVerificationStatusRequestVerificationStatusEnum = "verification_expired"
)

// SandboxItemSetVerificationStatusRequest
// SandboxItemSetVerificationStatusRequest defines the request schema for `/sandbox/item/set_verification_status`
type SandboxItemSetVerificationStatusRequest struct {
	AccessToken        string                                                        `json:"access_token"`
	AccountID          string                                                        `json:"account_id"`
	ClientID           *string                                                       `json:"client_id,omitempty"`
	Secret             *string                                                       `json:"secret,omitempty"`
	VerificationStatus SandboxItemSetVerificationStatusRequestVerificationStatusEnum `json:"verification_status"`
}
