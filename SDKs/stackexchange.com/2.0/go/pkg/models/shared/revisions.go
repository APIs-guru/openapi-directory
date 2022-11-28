package shared

type RevisionsUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type RevisionsUser struct {
	AcceptRate   *int64
	BadgeCounts  *RevisionsUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Revisions struct {
	Body             *string
	Comment          *string
	CreationDate     *int64
	IsRollback       *bool
	LastBody         *string
	LastTags         []interface{}
	LastTitle        *string
	PostID           *int64
	PostType         *string
	RevisionGUID     *string
	RevisionNumber   *int64
	RevisionType     *string
	SetCommunityWiki *bool
	Tags             []interface{}
	Title            *string
	User             *RevisionsUser
}
