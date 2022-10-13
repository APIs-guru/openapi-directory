package shared

type CreateTeamMemberRequest struct {
	IdempotencyKey *string     `json:"idempotency_key"`
	TeamMember     *TeamMember `json:"team_member"`
}
