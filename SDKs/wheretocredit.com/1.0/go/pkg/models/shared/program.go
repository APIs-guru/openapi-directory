package shared

type Program struct {
	Airlines     []string `json:"airlines,omitempty"`
	Denomination *string  `json:"denomination,omitempty"`
	FullName     *string  `json:"fullName,omitempty"`
	ID           *string  `json:"id,omitempty"`
	ProgramName  *string  `json:"programName,omitempty"`
	TierNames    []string `json:"tierNames,omitempty"`
}
