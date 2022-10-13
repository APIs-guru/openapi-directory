package shared

type Program struct {
	Airlines     []string `json:"airlines"`
	Denomination *string  `json:"denomination"`
	FullName     *string  `json:"fullName"`
	ID           *string  `json:"id"`
	ProgramName  *string  `json:"programName"`
	TierNames    []string `json:"tierNames"`
}
