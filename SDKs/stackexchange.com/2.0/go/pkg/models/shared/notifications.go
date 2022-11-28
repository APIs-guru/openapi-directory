package shared

type NotificationsSiteStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type NotificationsSite struct {
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
	Styling               *NotificationsSiteStyling
	TwitterAccount        *string
}

type Notifications struct {
	Body             *string
	CreationDate     *int64
	IsUnread         *bool
	NotificationType *string
	PostID           *int64
	Site             *NotificationsSite
}
