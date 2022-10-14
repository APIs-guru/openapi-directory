package shared

import (
	"time"
)

type DebateContribution struct {
	AnswerCount                *int32     `json:"answerCount,omitempty"`
	DebateID                   *int32     `json:"debateId,omitempty"`
	DebateTitle                *string    `json:"debateTitle,omitempty"`
	DebateWebsiteID            *string    `json:"debateWebsiteId,omitempty"`
	FirstTimecode              *time.Time `json:"firstTimecode,omitempty"`
	House                      *string    `json:"house,omitempty"`
	InterventionCount          *int32     `json:"interventionCount,omitempty"`
	PointsOfOrderCount         *int32     `json:"pointsOfOrderCount,omitempty"`
	QuestionCount              *int32     `json:"questionCount,omitempty"`
	Section                    *string    `json:"section,omitempty"`
	SittingDate                *time.Time `json:"sittingDate,omitempty"`
	SpeechCount                *int32     `json:"speechCount,omitempty"`
	StatementsCount            *int32     `json:"statementsCount,omitempty"`
	SupplementaryQuestionCount *int32     `json:"supplementaryQuestionCount,omitempty"`
	TotalContributions         *int32     `json:"totalContributions,omitempty"`
}
