package shared

type NetworkUsersBadgeCounts struct {
	Bronze *int64
	Gold   *int64
	Silver *int64
}

type NetworkUsers struct {
	AccountID      *int64
	AnswerCount    *int64
	BadgeCounts    *NetworkUsersBadgeCounts
	CreationDate   *int64
	LastAccessDate *int64
	QuestionCount  *int64
	Reputation     *int64
	SiteName       *string
	SiteURL        *string
	TopAnswers     []interface{}
	TopQuestions   []interface{}
	UserID         *int64
	UserType       *string
}
