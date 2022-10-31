package shared



type TflAPIPresentationEntitiesInstruction struct {
    Detailed *string `json:"detailed,omitempty"`
    Steps []TflAPIPresentationEntitiesInstructionStep `json:"steps,omitempty"`
    Summary *string `json:"summary,omitempty"`
    
}

