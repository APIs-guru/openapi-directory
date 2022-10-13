package operations

import (
	"openapi/pkg/models/shared"
)

type SubmitEvidencePathParams struct {
	DisputeID string `pathParam:"style=simple,explode=false,name=dispute_id"`
}

type SubmitEvidenceSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type SubmitEvidenceRequest struct {
	PathParams SubmitEvidencePathParams
	Security   SubmitEvidenceSecurity
}

type SubmitEvidenceResponse struct {
	ContentType            string
	StatusCode             int64
	SubmitEvidenceResponse *shared.SubmitEvidenceResponse
}
