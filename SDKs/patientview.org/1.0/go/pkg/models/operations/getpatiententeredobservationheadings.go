package operations

import (
	"openapi/pkg/models/shared"
)

type GetPatientEnteredObservationHeadingsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetPatientEnteredObservationHeadingsRequest struct {
	PathParams GetPatientEnteredObservationHeadingsPathParams
}

type GetPatientEnteredObservationHeadingsResponse struct {
	ContentType         string
	ObservationHeadings []shared.ObservationHeading
	StatusCode          int64
}
