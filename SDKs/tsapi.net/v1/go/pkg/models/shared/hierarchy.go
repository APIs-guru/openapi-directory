package shared

type HierarchyMetadata struct {
	InterviewCount *int32     `json:"interviewCount"`
	Languages      []Language `json:"languages"`
	Name           *string    `json:"name"`
	Title          *string    `json:"title"`
	Variables      []Variable `json:"variables"`
}

type HierarchyParent struct {
	Level   *string `json:"level"`
	LinkVar *string `json:"linkVar"`
	Ordered *bool   `json:"ordered"`
}

type Hierarchy struct {
	Ident    *string            `json:"ident"`
	Metadata *HierarchyMetadata `json:"metadata"`
	Parent   *HierarchyParent   `json:"parent"`
}
