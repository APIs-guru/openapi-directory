package shared

import (
	"time"
)

type PayeeInvitationStatusResponse2InvitationStatusEnum string

const (
	PayeeInvitationStatusResponse2InvitationStatusEnumAccepted PayeeInvitationStatusResponse2InvitationStatusEnum = "ACCEPTED"
	PayeeInvitationStatusResponse2InvitationStatusEnumPending  PayeeInvitationStatusResponse2InvitationStatusEnum = "PENDING"
	PayeeInvitationStatusResponse2InvitationStatusEnumDeclined PayeeInvitationStatusResponse2InvitationStatusEnum = "DECLINED"
)

type PayeeInvitationStatusResponse2 struct {
	GracePeriodEndDate *time.Time                                         `json:"gracePeriodEndDate,omitempty"`
	InvitationStatus   PayeeInvitationStatusResponse2InvitationStatusEnum `json:"invitationStatus"`
	PayeeID            string                                             `json:"payeeId"`
}
