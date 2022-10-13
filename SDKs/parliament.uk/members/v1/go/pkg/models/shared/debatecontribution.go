package shared

import (
	"time"
)

type DebateContribution struct {
	AnswerCount                *int32     `json:"answerCount"`
	DebateID                   *int32     `json:"debateId"`
	DebateTitle                *string    `json:"debateTitle"`
	DebateWebsiteID            *string    `json:"debateWebsiteId"`
	FirstTimecode              *time.Time `json:"firstTimecode"`
	House                      *string    `json:"house"`
	InterventionCount          *int32     `json:"interventionCount"`
	PointsOfOrderCount         *int32     `json:"pointsOfOrderCount"`
	QuestionCount              *int32     `json:"questionCount"`
	Section                    *string    `json:"section"`
	SittingDate                *time.Time `json:"sittingDate"`
	SpeechCount                *int32     `json:"speechCount"`
	StatementsCount            *int32     `json:"statementsCount"`
	SupplementaryQuestionCount *int32     `json:"supplementaryQuestionCount"`
	TotalContributions         *int32     `json:"totalContributions"`
}
