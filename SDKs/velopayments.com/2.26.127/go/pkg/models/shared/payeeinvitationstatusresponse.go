package shared

import (
	"time"
)

type PayeeInvitationStatusResponseInvitationStatusEnum string

const (
	PayeeInvitationStatusResponseInvitationStatusEnumAccepted PayeeInvitationStatusResponseInvitationStatusEnum = "ACCEPTED"
	PayeeInvitationStatusResponseInvitationStatusEnumPending  PayeeInvitationStatusResponseInvitationStatusEnum = "PENDING"
	PayeeInvitationStatusResponseInvitationStatusEnumDeclined PayeeInvitationStatusResponseInvitationStatusEnum = "DECLINED"
)

type PayeeInvitationStatusResponse struct {
	GracePeriodEndDate *time.Time                                        `json:"gracePeriodEndDate"`
	InvitationStatus   PayeeInvitationStatusResponseInvitationStatusEnum `json:"invitationStatus"`
	PayeeID            string                                            `json:"payeeId"`
}
