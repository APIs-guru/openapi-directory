package operations

import (
	"openapi/pkg/models/shared"
)

type GetChannelPrivacyUsersPathParams struct {
	ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
}

type GetChannelPrivacyUsersDirectionEnum string

const (
	GetChannelPrivacyUsersDirectionEnumAsc  GetChannelPrivacyUsersDirectionEnum = "asc"
	GetChannelPrivacyUsersDirectionEnumDesc GetChannelPrivacyUsersDirectionEnum = "desc"
)

type GetChannelPrivacyUsersQueryParams struct {
	Direction *GetChannelPrivacyUsersDirectionEnum `queryParam:"style=form,explode=true,name=direction"`
	Page      *float64                             `queryParam:"style=form,explode=true,name=page"`
	PerPage   *float64                             `queryParam:"style=form,explode=true,name=per_page"`
}

type GetChannelPrivacyUsersRequest struct {
	PathParams  GetChannelPrivacyUsersPathParams
	QueryParams GetChannelPrivacyUsersQueryParams
}

type GetChannelPrivacyUsersResponse struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
	Users       []shared.User
}
