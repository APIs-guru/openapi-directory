package shared

type ResourceUnauthorizedProblemResourceTypeEnum string

const (
	ResourceUnauthorizedProblemResourceTypeEnumTweet ResourceUnauthorizedProblemResourceTypeEnum = "tweet"
	ResourceUnauthorizedProblemResourceTypeEnumUser  ResourceUnauthorizedProblemResourceTypeEnum = "user"
	ResourceUnauthorizedProblemResourceTypeEnumMedia ResourceUnauthorizedProblemResourceTypeEnum = "media"
)

type ResourceUnauthorizedProblemSectionEnum string

const (
	ResourceUnauthorizedProblemSectionEnumData     ResourceUnauthorizedProblemSectionEnum = "data"
	ResourceUnauthorizedProblemSectionEnumIncludes ResourceUnauthorizedProblemSectionEnum = "includes"
)

type ResourceUnauthorizedProblem struct {
	Detail       string                                      `json:"detail"`
	ResourceID   string                                      `json:"resource_id"`
	ResourceType ResourceUnauthorizedProblemResourceTypeEnum `json:"resource_type"`
	Section      ResourceUnauthorizedProblemSectionEnum      `json:"section"`
	Title        string                                      `json:"title"`
	Type         string                                      `json:"type"`
}
