package shared

// NameFound
// Represents names found during the process
type NameFound struct {
	Count     int64  `json:"count"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
}
