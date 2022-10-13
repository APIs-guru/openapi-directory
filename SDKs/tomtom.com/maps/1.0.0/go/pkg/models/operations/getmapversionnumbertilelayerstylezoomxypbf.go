package operations

type GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnumBasic  GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = "basic"
	GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnumHybrid GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = "hybrid"
	GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnumLabels GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum = "labels"
)

type GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnumMain GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum = "main"
)

type GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams struct {
	X             int64                                               `pathParam:"style=simple,explode=false,name=X"`
	Y             int64                                               `pathParam:"style=simple,explode=false,name=Y"`
	Layer         GetMapVersionNumberTileLayerStyleZoomXYPbfLayerEnum `pathParam:"style=simple,explode=false,name=layer"`
	Style         GetMapVersionNumberTileLayerStyleZoomXYPbfStyleEnum `pathParam:"style=simple,explode=false,name=style"`
	VersionNumber int64                                               `pathParam:"style=simple,explode=false,name=versionNumber"`
	Zoom          int64                                               `pathParam:"style=simple,explode=false,name=zoom"`
}

type GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnumUnified GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum = "Unified"
	GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnumIl      GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum = "IL"
	GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnumIn      GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum = "IN"
)

type GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams struct {
	Language *string                                             `queryParam:"style=form,explode=true,name=language"`
	View     *GetMapVersionNumberTileLayerStyleZoomXYPbfViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetMapVersionNumberTileLayerStyleZoomXYPbfRequest struct {
	PathParams  GetMapVersionNumberTileLayerStyleZoomXYPbfPathParams
	QueryParams GetMapVersionNumberTileLayerStyleZoomXYPbfQueryParams
}

type GetMapVersionNumberTileLayerStyleZoomXYPbfResponse struct {
	ContentType string
	StatusCode  int64
}
