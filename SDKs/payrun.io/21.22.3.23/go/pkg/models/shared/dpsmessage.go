package shared

import (
	"time"
)

type DpsMessageDpsMessageMessageStatusMessageStatusEnum string

const (
	DpsMessageDpsMessageMessageStatusMessageStatusEnumRetrieved   DpsMessageDpsMessageMessageStatusMessageStatusEnum = "Retrieved"
	DpsMessageDpsMessageMessageStatusMessageStatusEnumApplied     DpsMessageDpsMessageMessageStatusMessageStatusEnum = "Applied"
	DpsMessageDpsMessageMessageStatusMessageStatusEnumUnresolved  DpsMessageDpsMessageMessageStatusMessageStatusEnum = "Unresolved"
	DpsMessageDpsMessageMessageStatusMessageStatusEnumIgnored     DpsMessageDpsMessageMessageStatusMessageStatusEnum = "Ignored"
	DpsMessageDpsMessageMessageStatusMessageStatusEnumInformation DpsMessageDpsMessageMessageStatusMessageStatusEnum = "Information"
)

type DpsMessageDpsMessageDpsMessage struct {
	FormType         *string                                             `json:"FormType,omitempty"`
	IssueDate        *time.Time                                          `json:"IssueDate,omitempty"`
	LastUpdated      *time.Time                                          `json:"LastUpdated,omitempty"`
	Message          *string                                             `json:"Message,omitempty"`
	MessageStatus    *DpsMessageDpsMessageMessageStatusMessageStatusEnum `json:"MessageStatus,omitempty"`
	MessageType      *string                                             `json:"MessageType,omitempty"`
	ProcessingResult *string                                             `json:"ProcessingResult,omitempty"`
	RetrieveDate     *time.Time                                          `json:"RetrieveDate,omitempty"`
	SequenceNumber   *int32                                              `json:"SequenceNumber,omitempty"`
}

type DpsMessage struct {
	DpsMessage *DpsMessageDpsMessageDpsMessage `json:"DpsMessage,omitempty"`
}
