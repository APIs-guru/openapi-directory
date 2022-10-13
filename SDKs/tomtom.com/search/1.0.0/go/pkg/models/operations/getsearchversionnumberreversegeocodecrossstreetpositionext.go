package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Position      string         `pathParam:"style=simple,explode=false,name=position"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams struct {
	Heading     *float32 `queryParam:"style=form,explode=true,name=heading"`
	Language    *string  `queryParam:"style=form,explode=true,name=language"`
	Limit       *int64   `queryParam:"style=form,explode=true,name=limit"`
	Radius      *int64   `queryParam:"style=form,explode=true,name=radius"`
	SpatialKeys *bool    `queryParam:"style=form,explode=true,name=spatialKeys"`
}

type GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtRequest struct {
	PathParams  GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtPathParams
	QueryParams GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtQueryParams
}

type GetSearchVersionNumberReverseGeocodeCrossStreetPositionExtResponse struct {
	ContentType string
	StatusCode  int64
}
