package operations

import (
	"openapi/pkg/models/shared"
)

type GetDashboardPkThumbnailDigestPathParams struct {
	Digest string `pathParam:"style=simple,explode=false,name=digest"`
	Pk     int64  `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDashboardPkThumbnailDigestQueryParams struct {
	Q *shared.ThumbnailQuerySchema `queryParam:"serialization=json,name=q"`
}

type GetDashboardPkThumbnailDigestSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDashboardPkThumbnailDigestRequest struct {
	PathParams  GetDashboardPkThumbnailDigestPathParams
	QueryParams GetDashboardPkThumbnailDigestQueryParams
	Security    GetDashboardPkThumbnailDigestSecurity
}

type GetDashboardPkThumbnailDigest202ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardPkThumbnailDigest401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardPkThumbnailDigest404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardPkThumbnailDigest422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardPkThumbnailDigest500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDashboardPkThumbnailDigestResponse struct {
	ContentType                                               string
	GetDashboardPkThumbnailDigest200ImageWildcardBinaryString []byte
	GetDashboardPkThumbnailDigest202ApplicationJSONObject     *GetDashboardPkThumbnailDigest202ApplicationJSON
	GetDashboardPkThumbnailDigest401ApplicationJSONObject     *GetDashboardPkThumbnailDigest401ApplicationJSON
	GetDashboardPkThumbnailDigest404ApplicationJSONObject     *GetDashboardPkThumbnailDigest404ApplicationJSON
	GetDashboardPkThumbnailDigest422ApplicationJSONObject     *GetDashboardPkThumbnailDigest422ApplicationJSON
	GetDashboardPkThumbnailDigest500ApplicationJSONObject     *GetDashboardPkThumbnailDigest500ApplicationJSON
	StatusCode                                                int64
}
