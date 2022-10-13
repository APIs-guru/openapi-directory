package operations

import (
	"openapi/pkg/models/shared"
)

type GetSearchVersionNumberReverseGeocodePositionExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	Position      string         `pathParam:"style=simple,explode=false,name=position"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetSearchVersionNumberReverseGeocodePositionExtQueryParams struct {
	Callback         *string  `queryParam:"style=form,explode=true,name=callback"`
	Heading          *float32 `queryParam:"style=form,explode=true,name=heading"`
	Number           *string  `queryParam:"style=form,explode=true,name=number"`
	Radius           *int64   `queryParam:"style=form,explode=true,name=radius"`
	ReturnRoadUse    *bool    `queryParam:"style=form,explode=true,name=returnRoadUse"`
	ReturnSpeedLimit *bool    `queryParam:"style=form,explode=true,name=returnSpeedLimit"`
	RoadUse          *string  `queryParam:"style=form,explode=true,name=roadUse"`
	SpatialKeys      *bool    `queryParam:"style=form,explode=true,name=spatialKeys"`
}

type GetSearchVersionNumberReverseGeocodePositionExtRequest struct {
	PathParams  GetSearchVersionNumberReverseGeocodePositionExtPathParams
	QueryParams GetSearchVersionNumberReverseGeocodePositionExtQueryParams
}

type GetSearchVersionNumberReverseGeocodePositionExtResponse struct {
	ContentType string
	StatusCode  int64
}
