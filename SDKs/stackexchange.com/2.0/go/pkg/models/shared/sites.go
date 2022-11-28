package shared

type SitesStyling struct {
	LinkColor          *string
	TagBackgroundColor *string
	TagForegroundColor *string
}

type Sites struct {
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
	Styling               *SitesStyling
	TwitterAccount        *string
}
