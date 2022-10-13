package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectVideosPathParams struct {
	ProjectID float64 `pathParam:"style=simple,explode=false,name=project_id"`
	UserID    float64 `pathParam:"style=simple,explode=false,name=user_id"`
}

type GetProjectVideosDirectionEnum string

const (
	GetProjectVideosDirectionEnumAsc  GetProjectVideosDirectionEnum = "asc"
	GetProjectVideosDirectionEnumDesc GetProjectVideosDirectionEnum = "desc"
)

type GetProjectVideosSortEnum string

const (
	GetProjectVideosSortEnumAlphabetical            GetProjectVideosSortEnum = "alphabetical"
	GetProjectVideosSortEnumDate                    GetProjectVideosSortEnum = "date"
	GetProjectVideosSortEnumDefault                 GetProjectVideosSortEnum = "default"
	GetProjectVideosSortEnumDuration                GetProjectVideosSortEnum = "duration"
	GetProjectVideosSortEnumLastUserActionEventDate GetProjectVideosSortEnum = "last_user_action_event_date"
)

type GetProjectVideosQueryParams struct {
	Direction *GetProjectVideosDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                       `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                       `queryParam:"style=form,explode=true,name=per_page"`
	Sort      *GetProjectVideosSortEnum      `queryParam:"style=form,explode=true,name=sort"`
}

type GetProjectVideosSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetProjectVideosRequest struct {
	PathParams  GetProjectVideosPathParams
	QueryParams GetProjectVideosQueryParams
	Security    GetProjectVideosSecurity
}

type GetProjectVideosResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Videos      []shared.Video
}
