package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIUsagePlansV2Security struct {
	BearerToken shared.SchemeBearerToken `security:"scheme,type=http,subtype=bearer"`
}

type GetAPIUsagePlansV2Request struct {
	Security GetAPIUsagePlansV2Security
}

type GetAPIUsagePlansV2Response struct {
	APIUsageList *shared.APIUsageList
	ContentType  string
	StatusCode   int64
}
