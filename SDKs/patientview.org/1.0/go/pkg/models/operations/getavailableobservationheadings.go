package operations

import (
	"openapi/pkg/models/shared"
)

type GetAvailableObservationHeadingsPathParams struct {
	UserID int64 `pathParam:"style=simple,explode=false,name=userId"`
}

type GetAvailableObservationHeadingsRequest struct {
	PathParams GetAvailableObservationHeadingsPathParams
}

type GetAvailableObservationHeadingsResponse struct {
	ContentType         string
	ObservationHeadings []shared.ObservationHeading
	StatusCode          int64
}
