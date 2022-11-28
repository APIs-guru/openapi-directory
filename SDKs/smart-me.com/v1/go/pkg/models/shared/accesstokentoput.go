package shared

// AccessTokenToPut
// Container Class for the Put action of an Access Token
type AccessTokenToPut struct {
	CardID *int64 `json:"CardId,omitempty" form:"name=CardId"`
	UserID *int64 `json:"UserId,omitempty" form:"name=UserId"`
}
