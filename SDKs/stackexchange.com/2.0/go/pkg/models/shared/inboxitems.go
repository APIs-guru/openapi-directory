package shared

type InboxItemsSiteStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type InboxItemsSite struct {
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
	Styling               *InboxItemsSiteStyling
	TwitterAccount        *string
}

type InboxItems struct {
	AnswerID     *int64
	Body         *string
	CommentID    *int64
	CreationDate *int64
	IsUnread     *bool
	ItemType     *string
	Link         *string
	QuestionID   *int64
	Site         *InboxItemsSite
	Title        *string
}
