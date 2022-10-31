package operations

type GetCapabilitiesPathParams struct {
	VersionNumber int64 `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetCapabilitiesRequestEnum string

const (
	GetCapabilitiesRequestEnumGetCapabilities GetCapabilitiesRequestEnum = "GetCapabilities"
)

type GetCapabilitiesServiceEnum string

const (
	GetCapabilitiesServiceEnumWms GetCapabilitiesServiceEnum = "WMS"
)

type GetCapabilitiesVersionEnum string

const (
	GetCapabilitiesVersionEnumOne11 GetCapabilitiesVersionEnum = "1.1.1"
)

type GetCapabilitiesQueryParams struct {
	Request GetCapabilitiesRequestEnum  `queryParam:"style=form,explode=true,name=request"`
	Service GetCapabilitiesServiceEnum  `queryParam:"style=form,explode=true,name=service"`
	Version *GetCapabilitiesVersionEnum `queryParam:"style=form,explode=true,name=version"`
}

type GetCapabilitiesRequest struct {
	PathParams  GetCapabilitiesPathParams
	QueryParams GetCapabilitiesQueryParams
}

type GetCapabilitiesResponse struct {
	ContentType string
	StatusCode  int64
}
