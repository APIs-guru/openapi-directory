package shared

type DisallowedResourceProblemResourceTypeEnum string

const (
	DisallowedResourceProblemResourceTypeEnumTweet DisallowedResourceProblemResourceTypeEnum = "tweet"
)

type DisallowedResourceProblemSectionEnum string

const (
	DisallowedResourceProblemSectionEnumData     DisallowedResourceProblemSectionEnum = "data"
	DisallowedResourceProblemSectionEnumIncludes DisallowedResourceProblemSectionEnum = "includes"
)

// DisallowedResourceProblem
// A problem that indicates that the resource requested violates the precepts of this API.
type DisallowedResourceProblem struct {
	Detail       string                                    `json:"detail"`
	ResourceID   string                                    `json:"resource_id"`
	ResourceType DisallowedResourceProblemResourceTypeEnum `json:"resource_type"`
	Section      DisallowedResourceProblemSectionEnum      `json:"section"`
	Title        string                                    `json:"title"`
	Type         string                                    `json:"type"`
}
