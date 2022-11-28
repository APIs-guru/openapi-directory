package shared

import (
	"time"
)

// GroupCountry
// Provides information about the country that is associated with a group.  May be null.
type GroupCountry struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// GroupMembershipQuestionnaire
// Membership questionnaire data.  Will be null unless the membership status is pending-questions.
type GroupMembershipQuestionnaire struct {
	Message   *string  `json:"message,omitempty"`
	Questions []string `json:"questions,omitempty"`
}

// GroupMembership
// Provides information about the current users' active or pending membership to this group (if any).  Will be null if there is no active or pending membership to this group.
type GroupMembership struct {
	Date          *time.Time                    `json:"date,omitempty"`
	Questionnaire *GroupMembershipQuestionnaire `json:"questionnaire,omitempty"`
	Status        *string                       `json:"status,omitempty"`
}

// GroupRegion
// Provides information about an area within a country that a group is associated with (eg. a state in the US or a province in Canada).  May be null.
type GroupRegion struct {
	Abbreviation *string `json:"abbreviation,omitempty"`
	Name         *string `json:"name,omitempty"`
}

// Group
// Groups are run by volunteer moderators and provide a way to group activity in a specific location. Because each group is usually run by different people, there can be variations in rules from group to group (eg. who is allowed to join, what is allowed to be posted, how often reposts are allowed).
type Group struct {
	Country        *GroupCountry    `json:"country,omitempty"`
	GroupID        *string          `json:"group_id,omitempty"`
	HasQuestions   *bool            `json:"has_questions,omitempty"`
	Homepage       *string          `json:"homepage,omitempty"`
	Identifier     *string          `json:"identifier,omitempty"`
	Latitude       *float64         `json:"latitude,omitempty"`
	Longitude      *float64         `json:"longitude,omitempty"`
	MemberCount    *int64           `json:"member_count,omitempty"`
	Membership     *GroupMembership `json:"membership,omitempty"`
	Name           *string          `json:"name,omitempty"`
	OpenArchives   *bool            `json:"open_archives,omitempty"`
	OpenMembership *bool            `json:"open_membership,omitempty"`
	Region         *GroupRegion     `json:"region,omitempty"`
	Timezone       *string          `json:"timezone,omitempty"`
	UtcOffset      *float64         `json:"utc_offset,omitempty"`
}
