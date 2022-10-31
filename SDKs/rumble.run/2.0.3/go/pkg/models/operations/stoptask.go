package operations

import (
	"openapi/pkg/models/shared"
)

type StopTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type StopTaskSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type StopTaskRequest struct {
	PathParams StopTaskPathParams
	Security   StopTaskSecurity
}

type StopTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
