package operations

import (
	"openapi/pkg/models/shared"
)

type RetrieveCustomerSegmentPathParams struct {
	SegmentID string `pathParam:"style=simple,explode=false,name=segment_id"`
}

type RetrieveCustomerSegmentSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type RetrieveCustomerSegmentRequest struct {
	PathParams RetrieveCustomerSegmentPathParams
	Security   RetrieveCustomerSegmentSecurity
}

type RetrieveCustomerSegmentResponse struct {
	ContentType                     string
	RetrieveCustomerSegmentResponse *shared.RetrieveCustomerSegmentResponse
	StatusCode                      int64
}
