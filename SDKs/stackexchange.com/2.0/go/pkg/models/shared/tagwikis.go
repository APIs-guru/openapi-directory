package shared

type TagWikisLastBodyEditorBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type TagWikisLastBodyEditor struct {
	AcceptRate   *int64
	BadgeCounts  *TagWikisLastBodyEditorBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type TagWikisLastExcerptEditorBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type TagWikisLastExcerptEditor struct {
	AcceptRate   *int64
	BadgeCounts  *TagWikisLastExcerptEditorBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type TagWikis struct {
	Body                *string
	BodyLastEditDate    *int64
	Excerpt             *string
	ExcerptLastEditDate *int64
	LastBodyEditor      *TagWikisLastBodyEditor
	LastExcerptEditor   *TagWikisLastExcerptEditor
	TagName             *string
}
