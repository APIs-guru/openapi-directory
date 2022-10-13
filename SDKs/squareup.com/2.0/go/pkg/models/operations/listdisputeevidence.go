package operations

import (
	"openapi/pkg/models/shared"
)

type ListDisputeEvidencePathParams struct {
	DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
}

type ListDisputeEvidenceQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
}

type ListDisputeEvidenceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListDisputeEvidenceRequest struct {
	PathParams  ListDisputeEvidencePathParams
	QueryParams ListDisputeEvidenceQueryParams
	Security    ListDisputeEvidenceSecurity
}

type ListDisputeEvidenceResponse struct {
	ContentType                 string
	ListDisputeEvidenceResponse *shared.ListDisputeEvidenceResponse
	StatusCode                  int64
}
