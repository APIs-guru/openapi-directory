package shared

type ResourceNotFoundProblemResourceTypeEnum string

const (
	ResourceNotFoundProblemResourceTypeEnumUser  ResourceNotFoundProblemResourceTypeEnum = "user"
	ResourceNotFoundProblemResourceTypeEnumTweet ResourceNotFoundProblemResourceTypeEnum = "tweet"
	ResourceNotFoundProblemResourceTypeEnumMedia ResourceNotFoundProblemResourceTypeEnum = "media"
)

type ResourceNotFoundProblem struct {
	Detail       string                                  `json:"detail"`
	Parameter    string                                  `json:"parameter"`
	ResourceID   string                                  `json:"resource_id"`
	ResourceType ResourceNotFoundProblemResourceTypeEnum `json:"resource_type"`
	Title        string                                  `json:"title"`
	Type         string                                  `json:"type"`
	Value        interface{}                             `json:"value"`
}
