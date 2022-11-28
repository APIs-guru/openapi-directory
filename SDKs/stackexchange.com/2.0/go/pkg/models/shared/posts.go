package shared

type PostsLastEditorBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type PostsLastEditor struct {
	AcceptRate   *int64
	BadgeCounts  *PostsLastEditorBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type PostsOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type PostsOwner struct {
	AcceptRate   *int64
	BadgeCounts  *PostsOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Posts struct {
	Body             *string
	BodyMarkdown     *string
	CommentCount     *int64
	Comments         []interface{}
	CreationDate     *int64
	DownVoteCount    *int64
	Downvoted        *bool
	LastActivityDate *int64
	LastEditDate     *int64
	LastEditor       *PostsLastEditor
	Link             *string
	Owner            *PostsOwner
	PostID           *int64
	PostType         *string
	Score            *int64
	ShareLink        *string
	Title            *string
	UpVoteCount      *int64
	Upvoted          *bool
}
