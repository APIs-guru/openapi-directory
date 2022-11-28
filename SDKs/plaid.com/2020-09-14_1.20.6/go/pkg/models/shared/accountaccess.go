package shared

// AccountAccess
// Allow or disallow product access by account. Unlisted (e.g. missing) accounts will be considered `new_accounts`.
type AccountAccess struct {
	Authorized *bool  `json:"authorized,omitempty"`
	UniqueID   string `json:"unique_id"`
}
