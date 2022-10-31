package shared

import (
"time")

type PayeePayorRef struct {
    InvitationStatus *InvitationStatusEnum `json:"invitationStatus,omitempty"`
    InvitationStatusTimestamp *time.Time `json:"invitationStatusTimestamp,omitempty"`
    PayableIssues []PayableIssue2 `json:"payableIssues,omitempty"`
    PayableStatus *bool `json:"payableStatus,omitempty"`
    PaymentChannelID *string `json:"paymentChannelId,omitempty"`
    PayorID *string `json:"payorId,omitempty"`
    RemoteID *string `json:"remoteId,omitempty"`
    
}

