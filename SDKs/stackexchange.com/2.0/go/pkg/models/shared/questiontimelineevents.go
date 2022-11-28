package shared

type QuestionTimelineEventsOwnerBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type QuestionTimelineEventsOwner struct {
	AcceptRate   *int64
	BadgeCounts  *QuestionTimelineEventsOwnerBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type QuestionTimelineEventsUserBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type QuestionTimelineEventsUser struct {
	AcceptRate   *int64
	BadgeCounts  *QuestionTimelineEventsUserBadgeCounts
	DisplayName  *string
	Link         *string
	ProfileImage *string
	Reputation   *int64
	UserID       *int64
	UserType     *string
}

type QuestionTimelineEvents struct {
	CommentID     *int64
	CreationDate  *int64
	DownVoteCount *int64
	Owner         *QuestionTimelineEventsOwner
	PostID        *int64
	QuestionID    *int64
	RevisionGUID  *string
	TimelineType  *string
	UpVoteCount   *int64
	User          *QuestionTimelineEventsUser
}
