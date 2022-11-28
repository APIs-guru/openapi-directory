package shared

type InfoObjectSiteStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type InfoObjectSite struct {
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
	Styling               *InfoObjectSiteStyling
	TwitterAccount        *string
}

type InfoObject struct {
	AnswersPerMinute   *float64
	APIRevision        *string
	BadgesPerMinute    *float64
	NewActiveUsers     *int64
	QuestionsPerMinute *float64
	Site               *InfoObjectSite
	TotalAccepted      *int64
	TotalAnswers       *int64
	TotalBadges        *int64
	TotalComments      *int64
	TotalQuestions     *int64
	TotalUnanswered    *int64
	TotalUsers         *int64
	TotalVotes         *int64
}
