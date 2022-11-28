package shared

// ItemImportRequestUserAuth
// Object of user ID and auth token pair, permitting Plaid to aggregate a user’s accounts
type ItemImportRequestUserAuth struct {
	AuthToken string `json:"auth_token"`
	UserID    string `json:"user_id"`
}
