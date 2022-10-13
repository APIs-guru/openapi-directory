package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideosToProjectPathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type AddVideosToProjectQueryParams struct {
	Uris string `queryParam:"style=form,explode=true,name=uris"`
}

type AddVideosToProjectSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideosToProjectRequest struct {
	PathParams  AddVideosToProjectPathParams
	QueryParams AddVideosToProjectQueryParams
	Security    AddVideosToProjectSecurity
}

type AddVideosToProjectResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
