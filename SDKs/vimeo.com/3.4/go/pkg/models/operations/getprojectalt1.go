package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectAlt1PathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type GetProjectAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetProjectAlt1Request struct {
	PathParams GetProjectAlt1PathParams
	Security   GetProjectAlt1Security
}

type GetProjectAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Project     *shared.Project
}
