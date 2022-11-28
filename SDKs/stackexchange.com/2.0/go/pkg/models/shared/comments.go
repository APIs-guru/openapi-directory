package shared

type CommentsOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type CommentsOwner struct {
	AcceptRate   *int64
	BadgeCounts  *CommentsOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type CommentsReplyToUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type CommentsReplyToUser struct {
	AcceptRate   *int64
	BadgeCounts  *CommentsReplyToUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Comments struct {
	Body         *string
	BodyMarkdown *string
	CanFlag      *bool
	CommentID    *int64
	CreationDate *int64
	Edited       *bool
	Link         *string
	Owner        *CommentsOwner
	PostID       *int64
	PostType     *string
	ReplyToUser  *CommentsReplyToUser
	Score        *int64
	Upvoted      *bool
}
