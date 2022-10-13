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
	FormType         *string                                             `json:"FormType"`
	IssueDate        *time.Time                                          `json:"IssueDate"`
	LastUpdated      *time.Time                                          `json:"LastUpdated"`
	Message          *string                                             `json:"Message"`
	MessageStatus    *DpsMessageDpsMessageMessageStatusMessageStatusEnum `json:"MessageStatus"`
	MessageType      *string                                             `json:"MessageType"`
	ProcessingResult *string                                             `json:"ProcessingResult"`
	RetrieveDate     *time.Time                                          `json:"RetrieveDate"`
	SequenceNumber   *int32                                              `json:"SequenceNumber"`
}

type DpsMessage struct {
	DpsMessage *DpsMessageDpsMessageDpsMessage `json:"DpsMessage"`
}
