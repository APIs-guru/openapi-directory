package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardIDOrSlugPathParams struct {
	IDOrSlug string `pathParam:"style=simple,explode=false,name=id_or_slug"`
}

type GetDashboardIDOrSlugSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardIDOrSlugRequest struct {
	PathParams GetDashboardIDOrSlugPathParams
	Security   GetDashboardIDOrSlugSecurity
}

type GetDashboardIDOrSlug200ApplicationJSON struct {
	Result *shared.DashboardGetResponseSchema `json:"result"`
}

type GetDashboardIDOrSlug400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlug401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlug404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDashboardIDOrSlugResponse struct {
	ContentType                                  string
	GetDashboardIDOrSlug200ApplicationJSONObject *GetDashboardIDOrSlug200ApplicationJSON
	GetDashboardIDOrSlug400ApplicationJSONObject *GetDashboardIDOrSlug400ApplicationJSON
	GetDashboardIDOrSlug401ApplicationJSONObject *GetDashboardIDOrSlug401ApplicationJSON
	GetDashboardIDOrSlug404ApplicationJSONObject *GetDashboardIDOrSlug404ApplicationJSON
	StatusCode                                   int64
}
