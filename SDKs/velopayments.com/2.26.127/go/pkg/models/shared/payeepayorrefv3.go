package shared

import (
	"time"
)

type PayeePayorRefV3 struct {
	InvitationStatus          *InvitationStatus2Enum `json:"invitationStatus"`
	InvitationStatusTimestamp *time.Time             `json:"invitationStatusTimestamp"`
	PayableIssues             []PayableIssue         `json:"payableIssues"`
	PayableStatus             *bool                  `json:"payableStatus"`
	PaymentChannelID          *string                `json:"paymentChannelId"`
	PayorID                   *string                `json:"payorId"`
	RemoteID                  *string                `json:"remoteId"`
}
