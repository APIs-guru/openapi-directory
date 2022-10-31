package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveVideosFromProjectAlt1PathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
}

type RemoveVideosFromProjectAlt1QueryParams struct {
	ShouldDeleteClips *bool  `queryParam:"style=form,explode=true,name=should_delete_clips"`
	Uris              string `queryParam:"style=form,explode=true,name=uris"`
}

type RemoveVideosFromProjectAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RemoveVideosFromProjectAlt1Request struct {
	PathParams  RemoveVideosFromProjectAlt1PathParams
	QueryParams RemoveVideosFromProjectAlt1QueryParams
	Security    RemoveVideosFromProjectAlt1Security
}

type RemoveVideosFromProjectAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
