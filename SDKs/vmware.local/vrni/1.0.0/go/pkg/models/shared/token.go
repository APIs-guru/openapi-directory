package shared

type Token struct {
	Expiry *int64  `json:"expiry,omitempty"`
	Token  *string `json:"token,omitempty"`
}
