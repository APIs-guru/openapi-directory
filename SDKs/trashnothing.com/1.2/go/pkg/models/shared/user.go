package shared

type UserFeedback struct {
	PercentPositive *float64 `json:"percent_positive,omitempty"`
	Restriction     *string  `json:"restriction,omitempty"`
	Score           *int64   `json:"score,omitempty"`
}

type User struct {
	AboutMe      *string       `json:"about_me,omitempty"`
	Country      *string       `json:"country,omitempty"`
	Feedback     *UserFeedback `json:"feedback,omitempty"`
	Firstname    *string       `json:"firstname,omitempty"`
	Lastname     *string       `json:"lastname,omitempty"`
	MemberSince  *string       `json:"member_since,omitempty"`
	ProfileImage *string       `json:"profile_image,omitempty"`
	ReplyTime    *int64        `json:"reply_time,omitempty"`
	UserID       *string       `json:"user_id,omitempty"`
	Username     *string       `json:"username,omitempty"`
}
