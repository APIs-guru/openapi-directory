package shared

type QuestionsBountyUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type QuestionsBountyUser struct {
	AcceptRate   *int64
	BadgeCounts  *QuestionsBountyUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type QuestionsClosedDetails struct {
	ByUsers           []interface{}
	Description       *string
	OnHold            *bool
	OriginalQuestions []interface{}
	Reason            *string
}

type QuestionsLastEditorBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type QuestionsLastEditor struct {
	AcceptRate   *int64
	BadgeCounts  *QuestionsLastEditorBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type QuestionsMigratedFromOtherSiteStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type QuestionsMigratedFromOtherSite struct {
	Aliases               []interface{}
	APISiteParameter      *string
	Audience              *string
	ClosedBetaDate        *int64
	FaviconURL            *string
	HighResolutionIconURL *string
	IconURL               *string
	LaunchDate            *int64
	LogoURL               *string
	MarkdownExtensions    []interface{}
	Name                  *string
	OpenBetaDate          *int64
	RelatedSites          []interface{}
	SiteState             *string
	SiteType              *string
	SiteURL               *string
	Styling               *QuestionsMigratedFromOtherSiteStyling
	TwitterAccount        *string
}

type QuestionsMigratedFrom struct {
	OnDate     *int64
	OtherSite  *QuestionsMigratedFromOtherSite
	QuestionID *int64
}

type QuestionsMigratedToOtherSiteStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type QuestionsMigratedToOtherSite struct {
	Aliases               []interface{}
	APISiteParameter      *string
	Audience              *string
	ClosedBetaDate        *int64
	FaviconURL            *string
	HighResolutionIconURL *string
	IconURL               *string
	LaunchDate            *int64
	LogoURL               *string
	MarkdownExtensions    []interface{}
	Name                  *string
	OpenBetaDate          *int64
	RelatedSites          []interface{}
	SiteState             *string
	SiteType              *string
	SiteURL               *string
	Styling               *QuestionsMigratedToOtherSiteStyling
	TwitterAccount        *string
}

type QuestionsMigratedTo struct {
	OnDate     *int64
	OtherSite  *QuestionsMigratedToOtherSite
	QuestionID *int64
}

type QuestionsNotice struct {
	Body         *string
	CreationDate *int64
	OwnerUserID  *int64
}

type QuestionsOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type QuestionsOwner struct {
	AcceptRate   *int64
	BadgeCounts  *QuestionsOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Questions struct {
	AcceptedAnswerID   *int64
	AnswerCount        *int64
	Answers            []interface{}
	Body               *string
	BodyMarkdown       *string
	BountyAmount       *int64
	BountyClosesDate   *int64
	BountyUser         *QuestionsBountyUser
	CanClose           *bool
	CanFlag            *bool
	CloseVoteCount     *int64
	ClosedDate         *int64
	ClosedDetails      *QuestionsClosedDetails
	ClosedReason       *string
	CommentCount       *int64
	Comments           []interface{}
	CommunityOwnedDate *int64
	CreationDate       *int64
	DeleteVoteCount    *int64
	DownVoteCount      *int64
	Downvoted          *bool
	FavoriteCount      *int64
	Favorited          *bool
	IsAnswered         *bool
	LastActivityDate   *int64
	LastEditDate       *int64
	LastEditor         *QuestionsLastEditor
	Link               *string
	LockedDate         *int64
	MigratedFrom       *QuestionsMigratedFrom
	MigratedTo         *QuestionsMigratedTo
	Notice             *QuestionsNotice
	Owner              *QuestionsOwner
	ProtectedDate      *int64
	QuestionID         *int64
	ReopenVoteCount    *int64
	Score              *int64
	ShareLink          *string
	Tags               []interface{}
	Title              *string
	UpVoteCount        *int64
	Upvoted            *bool
	ViewCount          *int64
}
