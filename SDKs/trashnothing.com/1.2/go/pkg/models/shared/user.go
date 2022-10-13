package shared

type UserFeedback struct {
	PercentPositive *float64 `json:"percent_positive"`
	Restriction     *string  `json:"restriction"`
	Score           *int64   `json:"score"`
}

type User struct {
	AboutMe      *string       `json:"about_me"`
	Country      *string       `json:"country"`
	Feedback     *UserFeedback `json:"feedback"`
	Firstname    *string       `json:"firstname"`
	Lastname     *string       `json:"lastname"`
	MemberSince  *string       `json:"member_since"`
	ProfileImage *string       `json:"profile_image"`
	ReplyTime    *int64        `json:"reply_time"`
	UserID       *string       `json:"user_id"`
	Username     *string       `json:"username"`
}
