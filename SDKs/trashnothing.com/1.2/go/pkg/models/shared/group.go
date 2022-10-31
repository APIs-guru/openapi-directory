package shared

import (
"time")

type GroupCountry struct {
    Abbreviation *string `json:"abbreviation,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type GroupMembershipQuestionnaire struct {
    Message *string `json:"message,omitempty"`
    Questions []string `json:"questions,omitempty"`
    
}

type GroupMembership struct {
    Date *time.Time `json:"date,omitempty"`
    Questionnaire *GroupMembershipQuestionnaire `json:"questionnaire,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

type GroupRegion struct {
    Abbreviation *string `json:"abbreviation,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type Group struct {
    Country *GroupCountry `json:"country,omitempty"`
    GroupID *string `json:"group_id,omitempty"`
    HasQuestions *bool `json:"has_questions,omitempty"`
    Homepage *string `json:"homepage,omitempty"`
    Identifier *string `json:"identifier,omitempty"`
    Latitude *float64 `json:"latitude,omitempty"`
    Longitude *float64 `json:"longitude,omitempty"`
    MemberCount *int64 `json:"member_count,omitempty"`
    Membership *GroupMembership `json:"membership,omitempty"`
    Name *string `json:"name,omitempty"`
    OpenArchives *bool `json:"open_archives,omitempty"`
    OpenMembership *bool `json:"open_membership,omitempty"`
    Region *GroupRegion `json:"region,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    UtcOffset *float64 `json:"utc_offset,omitempty"`
    
}

