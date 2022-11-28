package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartPkThumbnailDigestPathParams struct {
	Digest string `pathParam:"style=simple,explode=false,name=digest"`
	Pk     int64  `pathParam:"style=simple,explode=false,name=pk"`
}

type GetChartPkThumbnailDigestSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartPkThumbnailDigest400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartPkThumbnailDigest401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartPkThumbnailDigest404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartPkThumbnailDigest500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetChartPkThumbnailDigestRequest struct {
	PathParams GetChartPkThumbnailDigestPathParams
	Security   GetChartPkThumbnailDigestSecurity
}

type GetChartPkThumbnailDigestResponse struct {
	ContentType                                           string
	GetChartPkThumbnailDigest200ImageWildcardBinaryString []byte
	GetChartPkThumbnailDigest400ApplicationJSONObject     *GetChartPkThumbnailDigest400ApplicationJSON
	GetChartPkThumbnailDigest401ApplicationJSONObject     *GetChartPkThumbnailDigest401ApplicationJSON
	GetChartPkThumbnailDigest404ApplicationJSONObject     *GetChartPkThumbnailDigest404ApplicationJSON
	GetChartPkThumbnailDigest500ApplicationJSONObject     *GetChartPkThumbnailDigest500ApplicationJSON
	StatusCode                                            int64
}
