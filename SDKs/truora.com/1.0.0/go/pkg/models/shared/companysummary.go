package shared

// CompanySummary
// Represents the summary of a company background check
type CompanySummary struct {
	NamesFound []NameFound `json:"names_found,omitempty"`
}
