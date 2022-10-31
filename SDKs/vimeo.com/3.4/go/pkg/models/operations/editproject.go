package operations

import (
	"openapi/pkg/models/shared"
)

type EditProjectPathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type EditProjectRequestBody struct {
	Name string `json:"name"`
}

type EditProjectSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditProjectRequest struct {
	PathParams EditProjectPathParams
	Request    EditProjectRequestBody `request:"mediaType=application/json"`
	Security   EditProjectSecurity
}

type EditProjectResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Project     *shared.Project
}
