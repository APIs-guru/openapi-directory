package shared

import (
"time")

type PayeePayorRefV3 struct {
    InvitationStatus *InvitationStatus2Enum `json:"invitationStatus,omitempty"`
    InvitationStatusTimestamp *time.Time `json:"invitationStatusTimestamp,omitempty"`
    PayableIssues []PayableIssue `json:"payableIssues,omitempty"`
    PayableStatus *bool `json:"payableStatus,omitempty"`
    PaymentChannelID *string `json:"paymentChannelId,omitempty"`
    PayorID *string `json:"payorId,omitempty"`
    RemoteID *string `json:"remoteId,omitempty"`
    
}

