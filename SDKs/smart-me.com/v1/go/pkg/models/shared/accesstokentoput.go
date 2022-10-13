package shared

type AccessTokenToPut struct {
	CardID *int64 `json:"CardId" form:"name=CardId"`
	UserID *int64 `json:"UserId" form:"name=UserId"`
}
