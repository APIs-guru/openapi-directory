package operations

import (
	"openapi/pkg/models/shared"
)

type DetailAdvisoryPathParams struct {
	AdvisoryID string `pathParam:"style=simple,explode=false,name=advisory_id"`
}

type DetailAdvisorySecurity struct {
	RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
}

type DetailAdvisoryRequest struct {
	PathParams DetailAdvisoryPathParams
	Security   DetailAdvisorySecurity
}

type DetailAdvisoryResponse struct {
	ContentType                       string
	StatusCode                        int64
	ControllersAdvisoryDetailResponse *shared.ControllersAdvisoryDetailResponse
}
