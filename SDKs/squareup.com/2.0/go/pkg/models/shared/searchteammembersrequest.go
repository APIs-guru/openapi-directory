package shared



type SearchTeamMembersRequest struct {
    Cursor *string `json:"cursor,omitempty"`
    Limit *int64 `json:"limit,omitempty"`
    Query *SearchTeamMembersQuery `json:"query,omitempty"`
    
}

