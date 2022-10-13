package shared

type VariableLabel struct {
	AltLabels []AltLabel `json:"altLabels"`
	Text      *string    `json:"text"`
}

type VariableVariableValuesRange struct {
	From *string `json:"from"`
	To   *string `json:"to"`
}

type VariableVariableValues struct {
	Range  *VariableVariableValuesRange `json:"range"`
	Values []Value                      `json:"values"`
}

type Variable struct {
	Ident          *string                 `json:"ident"`
	Label          *VariableLabel          `json:"label"`
	MaxResponses   *int32                  `json:"maxResponses"`
	Name           *string                 `json:"name"`
	ParentType     *int32                  `json:"parentType"`
	Questions      []Variable              `json:"questions"`
	Type           *int32                  `json:"type"`
	Use            *int32                  `json:"use"`
	VariableValues *VariableVariableValues `json:"variableValues"`
}
