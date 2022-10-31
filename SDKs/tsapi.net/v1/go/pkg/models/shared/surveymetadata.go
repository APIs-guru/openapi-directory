package shared



type SurveyMetadata struct {
    Hierarchies []Hierarchy `json:"hierarchies,omitempty"`
    InterviewCount *int32 `json:"interviewCount,omitempty"`
    Languages []Language `json:"languages,omitempty"`
    Name *string `json:"name,omitempty"`
    Title *string `json:"title,omitempty"`
    Variables []Variable `json:"variables,omitempty"`
    
}

