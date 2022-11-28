package shared

type CreatedCommentOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type CreatedCommentOwner struct {
	AcceptRate   *int64
	BadgeCounts  *CreatedCommentOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type CreatedCommentReplyToUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type CreatedCommentReplyToUser struct {
	AcceptRate   *int64
	BadgeCounts  *CreatedCommentReplyToUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type CreatedComment struct {
	Body         *string
	BodyMarkdown *string
	CanFlag      *bool
	CommentID    *int64
	CreationDate *int64
	Edited       *bool
	Link         *string
	Owner        *CreatedCommentOwner
	PostID       *int64
	PostType     *string
	ReplyToUser  *CreatedCommentReplyToUser
	Score        *int64
	Upvoted      *bool
}
