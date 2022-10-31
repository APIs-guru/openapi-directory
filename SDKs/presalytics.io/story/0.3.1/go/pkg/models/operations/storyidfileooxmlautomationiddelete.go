package operations

type StoryIDFileOoxmlautomationidDeletePathParams struct {
	ID                string `pathParam:"style=simple,explode=false,name=id"`
	OoxmlAutomationID string `pathParam:"style=simple,explode=false,name=ooxml_automation_id"`
}

type StoryIDFileOoxmlautomationidDeleteRequest struct {
	PathParams StoryIDFileOoxmlautomationidDeletePathParams
}

type StoryIDFileOoxmlautomationidDeleteResponse struct {
	ContentType   string
	StatusCode    int64
	ProblemDetail *interface{}
}
