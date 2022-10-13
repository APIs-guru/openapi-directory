package operations

import (
	"openapi/pkg/models/shared"
)

type HideTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=task_id"`
}

type HideTaskSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type HideTaskRequest struct {
	PathParams HideTaskPathParams
	Security   HideTaskSecurity
}

type HideTaskResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
