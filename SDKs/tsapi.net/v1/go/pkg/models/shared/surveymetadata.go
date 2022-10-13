package shared

type SurveyMetadata struct {
	Hierarchies    []Hierarchy `json:"hierarchies"`
	InterviewCount *int32      `json:"interviewCount"`
	Languages      []Language  `json:"languages"`
	Name           *string     `json:"name"`
	Title          *string     `json:"title"`
	Variables      []Variable  `json:"variables"`
}
