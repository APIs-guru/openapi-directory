package shared

import (
	"time"
)

type PayeePayorRef struct {
	InvitationStatus          *InvitationStatusEnum `json:"invitationStatus"`
	InvitationStatusTimestamp *time.Time            `json:"invitationStatusTimestamp"`
	PayableIssues             []PayableIssue2       `json:"payableIssues"`
	PayableStatus             *bool                 `json:"payableStatus"`
	PaymentChannelID          *string               `json:"paymentChannelId"`
	PayorID                   *string               `json:"payorId"`
	RemoteID                  *string               `json:"remoteId"`
}
