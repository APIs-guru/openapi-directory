package operations

import (
	"openapi/pkg/models/shared"
)

type AddVideosToProjectAlt1PathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type AddVideosToProjectAlt1QueryParams struct {
	Uris string `queryParam:"style=form,explode=true,name=uris"`
}

type AddVideosToProjectAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type AddVideosToProjectAlt1Request struct {
	PathParams  AddVideosToProjectAlt1PathParams
	QueryParams AddVideosToProjectAlt1QueryParams
	Security    AddVideosToProjectAlt1Security
}

type AddVideosToProjectAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
