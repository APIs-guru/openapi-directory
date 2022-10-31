package shared

import (
"time")


type DpsMessageDpsMessageMessageStatusEnum string

const (
    DpsMessageDpsMessageMessageStatusEnumRetrieved DpsMessageDpsMessageMessageStatusEnum = "Retrieved"
DpsMessageDpsMessageMessageStatusEnumApplied DpsMessageDpsMessageMessageStatusEnum = "Applied"
DpsMessageDpsMessageMessageStatusEnumUnresolved DpsMessageDpsMessageMessageStatusEnum = "Unresolved"
DpsMessageDpsMessageMessageStatusEnumIgnored DpsMessageDpsMessageMessageStatusEnum = "Ignored"
DpsMessageDpsMessageMessageStatusEnumInformation DpsMessageDpsMessageMessageStatusEnum = "Information"
)


type DpsMessageDpsMessage struct {
    FormType *string `json:"FormType,omitempty"`
    IssueDate *time.Time `json:"IssueDate,omitempty"`
    LastUpdated *time.Time `json:"LastUpdated,omitempty"`
    Message *string `json:"Message,omitempty"`
    MessageStatus *DpsMessageDpsMessageMessageStatusEnum `json:"MessageStatus,omitempty"`
    MessageType *string `json:"MessageType,omitempty"`
    ProcessingResult *string `json:"ProcessingResult,omitempty"`
    RetrieveDate *time.Time `json:"RetrieveDate,omitempty"`
    SequenceNumber *int32 `json:"SequenceNumber,omitempty"`
    
}

type DpsMessage struct {
    DpsMessage *DpsMessageDpsMessage `json:"DpsMessage,omitempty"`
    
}

