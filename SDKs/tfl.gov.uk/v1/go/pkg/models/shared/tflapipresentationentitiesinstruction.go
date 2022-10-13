package shared

type TflAPIPresentationEntitiesInstruction struct {
	Detailed *string                                     `json:"detailed"`
	Steps    []TflAPIPresentationEntitiesInstructionStep `json:"steps"`
	Summary  *string                                     `json:"summary"`
}
