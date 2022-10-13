package shared

type SearchTeamMembersRequest struct {
	Cursor *string                 `json:"cursor"`
	Limit  *int64                  `json:"limit"`
	Query  *SearchTeamMembersQuery `json:"query"`
}
