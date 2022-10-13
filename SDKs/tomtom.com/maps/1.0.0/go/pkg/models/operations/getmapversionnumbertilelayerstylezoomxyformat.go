package operations

type GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnumJpg GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum = "jpg"
	GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnumPng GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum = "png"
)

type GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnumBasic  GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = "basic"
	GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnumHybrid GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = "hybrid"
	GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnumLabels GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum = "labels"
)

type GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnumMain  GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum = "main"
	GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnumNight GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum = "night"
)

type GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams struct {
	X             int64                                                   `pathParam:"style=simple,explode=false,name=X"`
	Y             int64                                                   `pathParam:"style=simple,explode=false,name=Y"`
	Format        GetMapVersionNumberTileLayerStyleZoomXYFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	Layer         GetMapVersionNumberTileLayerStyleZoomXYFormatLayerEnum  `pathParam:"style=simple,explode=false,name=layer"`
	Style         GetMapVersionNumberTileLayerStyleZoomXYFormatStyleEnum  `pathParam:"style=simple,explode=false,name=style"`
	VersionNumber int64                                                   `pathParam:"style=simple,explode=false,name=versionNumber"`
	Zoom          int64                                                   `pathParam:"style=simple,explode=false,name=zoom"`
}

type GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum string

const (
	GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnumUnified GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum = "Unified"
	GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnumIn      GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum = "IN"
)

type GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams struct {
	TileSize *int64                                                 `queryParam:"style=form,explode=true,name=tileSize"`
	View     *GetMapVersionNumberTileLayerStyleZoomXYFormatViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type GetMapVersionNumberTileLayerStyleZoomXYFormatRequest struct {
	PathParams  GetMapVersionNumberTileLayerStyleZoomXYFormatPathParams
	QueryParams GetMapVersionNumberTileLayerStyleZoomXYFormatQueryParams
}

type GetMapVersionNumberTileLayerStyleZoomXYFormatResponse struct {
	ContentType string
	StatusCode  int64
}
