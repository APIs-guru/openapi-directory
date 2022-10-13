package shared

import (
	"time"
)

type GroupCountry struct {
	Abbreviation *string `json:"abbreviation"`
	Name         *string `json:"name"`
}

type GroupMembershipQuestionnaire struct {
	Message   *string  `json:"message"`
	Questions []string `json:"questions"`
}

type GroupMembership struct {
	Date          *time.Time                    `json:"date"`
	Questionnaire *GroupMembershipQuestionnaire `json:"questionnaire"`
	Status        *string                       `json:"status"`
}

type GroupRegion struct {
	Abbreviation *string `json:"abbreviation"`
	Name         *string `json:"name"`
}

type Group struct {
	Country        *GroupCountry    `json:"country"`
	GroupID        *string          `json:"group_id"`
	HasQuestions   *bool            `json:"has_questions"`
	Homepage       *string          `json:"homepage"`
	Identifier     *string          `json:"identifier"`
	Latitude       *float64         `json:"latitude"`
	Longitude      *float64         `json:"longitude"`
	MemberCount    *int64           `json:"member_count"`
	Membership     *GroupMembership `json:"membership"`
	Name           *string          `json:"name"`
	OpenArchives   *bool            `json:"open_archives"`
	OpenMembership *bool            `json:"open_membership"`
	Region         *GroupRegion     `json:"region"`
	Timezone       *string          `json:"timezone"`
	UtcOffset      *float64         `json:"utc_offset"`
}
