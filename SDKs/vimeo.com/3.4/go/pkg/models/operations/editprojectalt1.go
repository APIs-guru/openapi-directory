package operations

import (
	"openapi/pkg/models/shared"
)

type EditProjectAlt1PathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type EditProjectAlt1RequestBody struct {
	Name string `json:"name"`
}

type EditProjectAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type EditProjectAlt1Request struct {
	PathParams EditProjectAlt1PathParams
	Request    EditProjectAlt1RequestBody `request:"mediaType=application/json"`
	Security   EditProjectAlt1Security
}

type EditProjectAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Project     *shared.Project
}
