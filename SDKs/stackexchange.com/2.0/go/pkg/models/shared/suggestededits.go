package shared

type SuggestedEditsProposingUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type SuggestedEditsProposingUser struct {
	AcceptRate   *int64
	BadgeCounts  *SuggestedEditsProposingUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type SuggestedEdits struct {
	ApprovalDate    *int64
	Body            *string
	Comment         *string
	CreationDate    *int64
	PostID          *int64
	PostType        *string
	ProposingUser   *SuggestedEditsProposingUser
	RejectionDate   *int64
	SuggestedEditID *int64
	Tags            []interface{}
	Title           *string
}
