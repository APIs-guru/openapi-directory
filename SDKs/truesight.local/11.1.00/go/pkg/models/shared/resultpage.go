package shared

// ResultPage
// Encapsulates a list of results.
type ResultPage struct {
	Items            []map[string]interface{}
	RestrictedRights *bool
	Total            *int64
}
