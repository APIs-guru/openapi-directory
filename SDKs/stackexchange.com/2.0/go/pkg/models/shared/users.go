package shared

type UsersBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type Users struct {
	AboutMe                 *string
	AcceptRate              *int64
	AccountID               *int64
	Age                     *int64
	AnswerCount             *int64
	BadgeCounts             *UsersBadgeCounts
	CreationDate            *int64
	DisplayName             *string
	DownVoteCount           *int64
	IsEmployee              *bool
	LastAccessDate          *int64
	LastModifiedDate        *int64
	Link                    *string
	Location                *string
	ProfileImage            *string
	QuestionCount           *int64
	Reputation              *int64
	ReputationChangeDay     *int64
	ReputationChangeMonth   *int64
	ReputationChangeQuarter *int64
	ReputationChangeWeek    *int64
	ReputationChangeYear    *int64
	TimedPenaltyDate        *int64
	UpVoteCount             *int64
	UserID                  *int64
	UserType                *string
	ViewCount               *int64
	WebsiteURL              *string
}
