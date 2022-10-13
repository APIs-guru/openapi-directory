package shared

type ResourceNotFoundProblemResourceTypeEnum string

const (
	ResourceNotFoundProblemResourceTypeEnumUser  ResourceNotFoundProblemResourceTypeEnum = "user"
	ResourceNotFoundProblemResourceTypeEnumTweet ResourceNotFoundProblemResourceTypeEnum = "tweet"
)

type ResourceNotFoundProblem struct {
	Detail       string                                  `json:"detail"`
	Parameter    string                                  `json:"parameter"`
	ResourceType ResourceNotFoundProblemResourceTypeEnum `json:"resource_type"`
	Title        string                                  `json:"title"`
	Type         string                                  `json:"type"`
	Value        interface{}                             `json:"value"`
}
