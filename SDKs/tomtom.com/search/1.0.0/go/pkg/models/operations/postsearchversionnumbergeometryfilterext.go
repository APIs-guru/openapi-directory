package operations

import (
	"openapi/pkg/models/shared"
)

type PostSearchVersionNumberGeometryFilterExtPathParams struct {
	Ext           shared.ExtEnum `pathParam:"style=simple,explode=false,name=ext"`
	VersionNumber int64          `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList struct {
	Position *string  `json:"position"`
	Radius   *int64   `json:"radius"`
	Type     *string  `json:"type"`
	Vertices []string `json:"vertices"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress struct {
	FreeformAddress *string `json:"freeformAddress"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi struct {
	Name *string `json:"name"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition struct {
	Lat *float32 `json:"lat"`
	Lon *float32 `json:"lon"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList struct {
	Address  *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListAddress  `json:"address"`
	Poi      *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPoi      `json:"poi"`
	Position *PostSearchVersionNumberGeometryFilterExtRequestBodyPoiListPosition `json:"position"`
}

type PostSearchVersionNumberGeometryFilterExtRequestBody struct {
	GeometryList []PostSearchVersionNumberGeometryFilterExtRequestBodyGeometryList `json:"geometryList"`
	PoiList      []PostSearchVersionNumberGeometryFilterExtRequestBodyPoiList      `json:"poiList"`
}

type PostSearchVersionNumberGeometryFilterExtRequest struct {
	PathParams PostSearchVersionNumberGeometryFilterExtPathParams
	Request    *PostSearchVersionNumberGeometryFilterExtRequestBody `request:"mediaType=application/json"`
}

type PostSearchVersionNumberGeometryFilterExtResponse struct {
	ContentType string
	StatusCode  int64
}
