package shared

type TagScoreObjectsUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type TagScoreObjectsUser struct {
	AcceptRate   *int64
	BadgeCounts  *TagScoreObjectsUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type TagScoreObjects struct {
	PostCount *int64
	Score     *int64
	User      *TagScoreObjectsUser
}
