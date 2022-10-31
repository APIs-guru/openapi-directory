package shared

import (
	"time"
)

type EventDirectionEnum string

const (
	EventDirectionEnumInbound  EventDirectionEnum = "INBOUND"
	EventDirectionEnumOutbound EventDirectionEnum = "OUTBOUND"
)

type EventStateEnum string

const (
	EventStateEnumInitializing EventStateEnum = "INITIALIZING"
	EventStateEnumRinging      EventStateEnum = "RINGING"
	EventStateEnumActive       EventStateEnum = "ACTIVE"
	EventStateEnumHeld         EventStateEnum = "HELD"
	EventStateEnumRemoteHeld   EventStateEnum = "REMOTE_HELD"
	EventStateEnumDetached     EventStateEnum = "DETACHED"
	EventStateEnumRejected     EventStateEnum = "REJECTED"
	EventStateEnumCancelled    EventStateEnum = "CANCELLED"
	EventStateEnumAnswered     EventStateEnum = "ANSWERED"
	EventStateEnumMissed       EventStateEnum = "MISSED"
)

type EventTypeEnum string

const (
	EventTypeEnumCall EventTypeEnum = "CALL"
)

type Event struct {
	AccountID   int64              `json:"accountId"`
	AnswerTime  *time.Time         `json:"answerTime,omitempty"`
	CallerID    *string            `json:"callerId,omitempty"`
	Direction   EventDirectionEnum `json:"direction"`
	Duration    *int64             `json:"duration,omitempty"`
	EndTime     *time.Time         `json:"endTime,omitempty"`
	ExternalID  *string            `json:"externalId,omitempty"`
	ID          int64              `json:"id"`
	PhoneNumber string             `json:"phoneNumber"`
	SmsData     *string            `json:"smsData,omitempty"`
	StartTime   time.Time          `json:"startTime"`
	State       EventStateEnum     `json:"state"`
	Type        EventTypeEnum      `json:"type"`
	UciID       int64              `json:"uciId"`
	UserID      int64              `json:"userId"`
}
