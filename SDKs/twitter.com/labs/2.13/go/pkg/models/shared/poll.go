package shared

import (
"time")


type PollVotingStatusEnum string

const (
    PollVotingStatusEnumOpen PollVotingStatusEnum = "open"
PollVotingStatusEnumClosed PollVotingStatusEnum = "closed"
)


type Poll struct {
    DurationMinutes *int64 `json:"duration_minutes,omitempty"`
    EndDatetime *time.Time `json:"end_datetime,omitempty"`
    ID string `json:"id"`
    Options []PollOption `json:"options"`
    VotingStatus *PollVotingStatusEnum `json:"voting_status,omitempty"`
    
}

