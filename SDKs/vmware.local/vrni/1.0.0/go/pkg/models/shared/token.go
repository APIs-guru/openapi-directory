package shared

type Token struct {
	Expiry *int64  `json:"expiry"`
	Token  *string `json:"token"`
}
