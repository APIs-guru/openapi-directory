package shared

type ResourceUnauthorizedProblemResourceTypeEnum string

const (
	ResourceUnauthorizedProblemResourceTypeEnumTweet ResourceUnauthorizedProblemResourceTypeEnum = "tweet"
)

type ResourceUnauthorizedProblemSectionEnum string

const (
	ResourceUnauthorizedProblemSectionEnumData     ResourceUnauthorizedProblemSectionEnum = "data"
	ResourceUnauthorizedProblemSectionEnumIncludes ResourceUnauthorizedProblemSectionEnum = "includes"
)

// ResourceUnauthorizedProblem
// A problem that indicates you are not allowed to see a particular Tweet, User, etc.
type ResourceUnauthorizedProblem struct {
	Detail       string                                      `json:"detail"`
	ResourceID   string                                      `json:"resource_id"`
	ResourceType ResourceUnauthorizedProblemResourceTypeEnum `json:"resource_type"`
	Section      ResourceUnauthorizedProblemSectionEnum      `json:"section"`
	Title        string                                      `json:"title"`
	Type         string                                      `json:"type"`
}
