package shared



type CreateTeamMemberRequest struct {
    IdempotencyKey *string `json:"idempotency_key,omitempty"`
    TeamMember *TeamMember `json:"team_member,omitempty"`
    
}

