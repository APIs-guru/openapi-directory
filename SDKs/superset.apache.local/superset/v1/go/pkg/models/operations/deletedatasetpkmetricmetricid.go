package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatasetPkMetricMetricIDPathParams struct {
	MetricID int64 `pathParam:"style=simple,explode=false,name=metric_id"`
	Pk       int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteDatasetPkMetricMetricIDSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDatasetPkMetricMetricIDRequest struct {
	PathParams DeleteDatasetPkMetricMetricIDPathParams
	Security   DeleteDatasetPkMetricMetricIDSecurity
}

type DeleteDatasetPkMetricMetricID200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricID401ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricID403ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricID404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricID422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricID500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkMetricMetricIDResponse struct {
	ContentType                                           string
	DeleteDatasetPkMetricMetricID200ApplicationJSONObject *DeleteDatasetPkMetricMetricID200ApplicationJSON
	DeleteDatasetPkMetricMetricID401ApplicationJSONObject *DeleteDatasetPkMetricMetricID401ApplicationJSON
	DeleteDatasetPkMetricMetricID403ApplicationJSONObject *DeleteDatasetPkMetricMetricID403ApplicationJSON
	DeleteDatasetPkMetricMetricID404ApplicationJSONObject *DeleteDatasetPkMetricMetricID404ApplicationJSON
	DeleteDatasetPkMetricMetricID422ApplicationJSONObject *DeleteDatasetPkMetricMetricID422ApplicationJSON
	DeleteDatasetPkMetricMetricID500ApplicationJSONObject *DeleteDatasetPkMetricMetricID500ApplicationJSON
	StatusCode                                            int64
}
