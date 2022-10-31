package shared



type HierarchyMetadata struct {
    InterviewCount *int32 `json:"interviewCount,omitempty"`
    Languages []Language `json:"languages,omitempty"`
    Name *string `json:"name,omitempty"`
    Title *string `json:"title,omitempty"`
    Variables []Variable `json:"variables,omitempty"`
    
}

type HierarchyParent struct {
    Level *string `json:"level,omitempty"`
    LinkVar *string `json:"linkVar,omitempty"`
    Ordered *bool `json:"ordered,omitempty"`
    
}

type Hierarchy struct {
    Ident *string `json:"ident,omitempty"`
    Metadata *HierarchyMetadata `json:"metadata,omitempty"`
    Parent *HierarchyParent `json:"parent,omitempty"`
    
}

