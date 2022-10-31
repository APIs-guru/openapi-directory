package operations

type GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum string

const (
	GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnumJSON  GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = "json"
	GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnumJsonp GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = "jsonp"
	GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnumXML   GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum = "xml"
)

type GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams struct {
	Format        GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatFormatEnum `pathParam:"style=simple,explode=false,name=format"`
	MaxLat        float64                                                               `pathParam:"style=simple,explode=false,name=maxLat"`
	MaxLon        float64                                                               `pathParam:"style=simple,explode=false,name=maxLon"`
	MinLat        float64                                                               `pathParam:"style=simple,explode=false,name=minLat"`
	MinLon        float64                                                               `pathParam:"style=simple,explode=false,name=minLon"`
	VersionNumber int64                                                                 `pathParam:"style=simple,explode=false,name=versionNumber"`
}

type GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams struct {
	Callback *string `queryParam:"style=form,explode=true,name=callback"`
}

type GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatRequest struct {
	PathParams  GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatPathParams
	QueryParams GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatQueryParams
}

type GetMapVersionNumberCopyrightsMinLonMinLatMaxLonMaxLatFormatResponse struct {
	ContentType string
	StatusCode  int64
}
