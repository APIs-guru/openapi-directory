package shared



type VariableLabel struct {
    AltLabels []AltLabel `json:"altLabels,omitempty"`
    Text *string `json:"text,omitempty"`
    
}

type VariableVariableValuesRange struct {
    From *string `json:"from,omitempty"`
    To *string `json:"to,omitempty"`
    
}

type VariableVariableValues struct {
    Range *VariableVariableValuesRange `json:"range,omitempty"`
    Values []Value `json:"values,omitempty"`
    
}

type Variable struct {
    Ident *string `json:"ident,omitempty"`
    Label *VariableLabel `json:"label,omitempty"`
    MaxResponses *int32 `json:"maxResponses,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentType *int32 `json:"parentType,omitempty"`
    Questions []Variable `json:"questions,omitempty"`
    Type *int32 `json:"type,omitempty"`
    Use *int32 `json:"use,omitempty"`
    VariableValues *VariableVariableValues `json:"variableValues,omitempty"`
    
}

