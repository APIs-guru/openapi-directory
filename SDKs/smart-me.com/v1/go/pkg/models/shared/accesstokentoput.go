package shared

type AccessTokenToPut struct {
	CardID *int64 `json:"CardId,omitempty" form:"name=CardId"`
	UserID *int64 `json:"UserId,omitempty" form:"name=UserId"`
}
