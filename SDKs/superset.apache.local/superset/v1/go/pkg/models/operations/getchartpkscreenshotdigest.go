package operations

import (
	"openapi/pkg/models/shared"
)

type GetChartPkScreenshotDigestPathParams struct {
	Digest string `pathParam:"style=simple,explode=false,name=digest"`
	Pk     int64  `pathParam:"style=simple,explode=false,name=pk"`
}

type GetChartPkScreenshotDigestSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetChartPkScreenshotDigestRequest struct {
	PathParams GetChartPkScreenshotDigestPathParams
	Security   GetChartPkScreenshotDigestSecurity
}

type GetChartPkScreenshotDigest400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkScreenshotDigest401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkScreenshotDigest404ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkScreenshotDigest500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetChartPkScreenshotDigestResponse struct {
	ContentType                                            string
	GetChartPkScreenshotDigest200ImageWildcardBinaryString []byte
	GetChartPkScreenshotDigest400ApplicationJSONObject     *GetChartPkScreenshotDigest400ApplicationJSON
	GetChartPkScreenshotDigest401ApplicationJSONObject     *GetChartPkScreenshotDigest401ApplicationJSON
	GetChartPkScreenshotDigest404ApplicationJSONObject     *GetChartPkScreenshotDigest404ApplicationJSON
	GetChartPkScreenshotDigest500ApplicationJSONObject     *GetChartPkScreenshotDigest500ApplicationJSON
	StatusCode                                             int64
}
