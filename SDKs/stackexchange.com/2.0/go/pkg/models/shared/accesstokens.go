package shared

type AccessTokens struct {
	AccessToken   *string
	AccountID     *int64
	ExpiresOnDate *int64
	Scope         []interface{}
}
