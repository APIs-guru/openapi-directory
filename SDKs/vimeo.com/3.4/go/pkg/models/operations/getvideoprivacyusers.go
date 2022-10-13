package operations

import (
	"openapi/pkg/models/shared"
)

type GetVideoPrivacyUsersPathParams struct {
	VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
}

type GetVideoPrivacyUsersQueryParams struct {
	Page    *float64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
}

type GetVideoPrivacyUsersRequest struct {
	PathParams  GetVideoPrivacyUsersPathParams
	QueryParams GetVideoPrivacyUsersQueryParams
}

type GetVideoPrivacyUsersResponse struct {
	ContentType string
	StatusCode  int64
	LegacyError *shared.LegacyError
	Users       []shared.User
}
