package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardFavoriteStatusQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type GetDashboardFavoriteStatusSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardFavoriteStatusRequest struct {
	QueryParams GetDashboardFavoriteStatusQueryParams
	Security    GetDashboardFavoriteStatusSecurity
}

type GetDashboardFavoriteStatus400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardFavoriteStatus401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardFavoriteStatus404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardFavoriteStatus500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardFavoriteStatusResponse struct {
	ContentType                                        string
	GetDashboardFavoriteStatus400ApplicationJSONObject *GetDashboardFavoriteStatus400ApplicationJSON
	GetDashboardFavoriteStatus401ApplicationJSONObject *GetDashboardFavoriteStatus401ApplicationJSON
	GetDashboardFavoriteStatus404ApplicationJSONObject *GetDashboardFavoriteStatus404ApplicationJSON
	GetDashboardFavoriteStatus500ApplicationJSONObject *GetDashboardFavoriteStatus500ApplicationJSON
	GetFavStarIdsSchema                                *shared.GetFavStarIdsSchema
	StatusCode                                         int64
}
