package operations

type StoryIDFileOoxmlautomationidGetPathParams struct {
	ID                string `pathParam:"style=simple,explode=false,name=id"`
	OoxmlAutomationID string `pathParam:"style=simple,explode=false,name=ooxml_automation_id"`
}

type StoryIDFileOoxmlautomationidGetRequest struct {
	PathParams StoryIDFileOoxmlautomationidGetPathParams
}

type StoryIDFileOoxmlautomationidGetResponse struct {
	ContentType            string
	ExcelSpreadsheet       []byte
	PowerpointPresentation []byte
	StatusCode             int64
	WordDocument           []byte
	ProblemDetail          *interface{}
}
