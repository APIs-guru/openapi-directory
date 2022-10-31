package shared

import (
"time")


type CallDirectionEnum string

const (
    CallDirectionEnumInbound CallDirectionEnum = "INBOUND"
CallDirectionEnumOutbound CallDirectionEnum = "OUTBOUND"
)



type CallStateEnum string

const (
    CallStateEnumInitializing CallStateEnum = "INITIALIZING"
CallStateEnumRinging CallStateEnum = "RINGING"
CallStateEnumActive CallStateEnum = "ACTIVE"
CallStateEnumHeld CallStateEnum = "HELD"
CallStateEnumRemoteHeld CallStateEnum = "REMOTE_HELD"
CallStateEnumDetached CallStateEnum = "DETACHED"
CallStateEnumRejected CallStateEnum = "REJECTED"
CallStateEnumCancelled CallStateEnum = "CANCELLED"
CallStateEnumAnswered CallStateEnum = "ANSWERED"
CallStateEnumMissed CallStateEnum = "MISSED"
)



type CallTypeEnum string

const (
    CallTypeEnumCall CallTypeEnum = "CALL"
)


type Call struct {
    AccountID int64 `json:"accountId"`
    AnswerTime *time.Time `json:"answerTime,omitempty"`
    CallerID *string `json:"callerId,omitempty"`
    Direction CallDirectionEnum `json:"direction"`
    Duration int64 `json:"duration"`
    EndTime *time.Time `json:"endTime,omitempty"`
    ExternalID *string `json:"externalId,omitempty"`
    ID int64 `json:"id"`
    PhoneNumber string `json:"phoneNumber"`
    StartTime time.Time `json:"startTime"`
    State CallStateEnum `json:"state"`
    Type CallTypeEnum `json:"type"`
    UciID int64 `json:"uciId"`
    UserID int64 `json:"userId"`
    
}

