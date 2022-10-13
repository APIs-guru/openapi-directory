package operations

type GetMapPathParams struct {
	VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetMapFormatEnum string

const (
	GetMapFormatEnumImageJpeg GetMapFormatEnum = "image/jpeg"
	GetMapFormatEnumImagePng  GetMapFormatEnum = "image/png"
)

type GetMapLayersEnum string

const (
	GetMapLayersEnumBasic GetMapLayersEnum = "basic"
)

type GetMapRequestEnum string

const (
	GetMapRequestEnumGetMap GetMapRequestEnum = "GetMap"
)

type GetMapServiceEnum string

const (
	GetMapServiceEnumWms GetMapServiceEnum = "WMS"
)

type GetMapSrsEnum string

const (
	GetMapSrsEnumEpsg3857 GetMapSrsEnum = "EPSG:3857"
	GetMapSrsEnumEpsg4326 GetMapSrsEnum = "EPSG:4326"
)

type GetMapStylesEnum string

const (
	GetMapStylesEnumUnknown GetMapStylesEnum = ""
)

type GetMapVersionEnum string

const (
	GetMapVersionEnumOne11 GetMapVersionEnum = "1.1.1"
)

type GetMapQueryParams struct {
	Bbox    string             `queryParam:"style=form,explode=true,name=bbox"`
	Format  GetMapFormatEnum   `queryParam:"style=form,explode=true,name=format"`
	Height  int64              `queryParam:"style=form,explode=true,name=height"`
	Layers  GetMapLayersEnum   `queryParam:"style=form,explode=true,name=layers"`
	Request GetMapRequestEnum  `queryParam:"style=form,explode=true,name=request"`
	Service *GetMapServiceEnum `queryParam:"style=form,explode=true,name=service"`
	Srs     GetMapSrsEnum      `queryParam:"style=form,explode=true,name=srs"`
	Styles  *GetMapStylesEnum  `queryParam:"style=form,explode=true,name=styles"`
	Version GetMapVersionEnum  `queryParam:"style=form,explode=true,name=version"`
	Width   int64              `queryParam:"style=form,explode=true,name=width"`
}

type GetMapRequest struct {
	PathParams  GetMapPathParams
	QueryParams GetMapQueryParams
}

type GetMapResponse struct {
	ContentType string
	StatusCode  int64
}
