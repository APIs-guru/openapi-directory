package shared



type NodeWhere struct {
    Attribute *string `json:"attribute,omitempty"`
    Comparator *string `json:"comparator,omitempty"`
    ObjectType *string `json:"objectType,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

