package shared

type AnswersLastEditorBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type AnswersLastEditor struct {
	AcceptRate   *int64
	BadgeCounts  *AnswersLastEditorBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type AnswersOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type AnswersOwner struct {
	AcceptRate   *int64
	BadgeCounts  *AnswersOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Answers struct {
	Accepted            *bool
	AnswerID            *int64
	AwardedBountyAmount *int64
	AwardedBountyUsers  []interface{}
	Body                *string
	BodyMarkdown        *string
	CanFlag             *bool
	CommentCount        *int64
	Comments            []interface{}
	CommunityOwnedDate  *int64
	CreationDate        *int64
	DownVoteCount       *int64
	Downvoted           *bool
	IsAccepted          *bool
	LastActivityDate    *int64
	LastEditDate        *int64
	LastEditor          *AnswersLastEditor
	Link                *string
	LockedDate          *int64
	Owner               *AnswersOwner
	QuestionID          *int64
	Score               *int64
	ShareLink           *string
	Tags                []interface{}
	Title               *string
	UpVoteCount         *int64
	Upvoted             *bool
}
