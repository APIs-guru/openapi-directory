package shared

type BadgesUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type BadgesUser struct {
	AcceptRate   *int64
	BadgeCounts  *BadgesUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type Badges struct {
	AwardCount  *int64
	BadgeID     *int64
	BadgeType   *string
	Description *string
	Link        *string
	Name        *string
	Rank        *string
	User        *BadgesUser
}
