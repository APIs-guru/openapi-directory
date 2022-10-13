package operations

type CabwiseGetQueryParams struct {
	ForceXML            *bool    `queryParam:"style=form,explode=true,name=forceXml"`
	Lat                 float64  `queryParam:"style=form,explode=true,name=lat"`
	LegacyFormat        *bool    `queryParam:"style=form,explode=true,name=legacyFormat"`
	Lon                 float64  `queryParam:"style=form,explode=true,name=lon"`
	MaxResults          *int32   `queryParam:"style=form,explode=true,name=maxResults"`
	Name                *string  `queryParam:"style=form,explode=true,name=name"`
	Optype              *string  `queryParam:"style=form,explode=true,name=optype"`
	Radius              *float64 `queryParam:"style=form,explode=true,name=radius"`
	TwentyFourSevenOnly *bool    `queryParam:"style=form,explode=true,name=twentyFourSevenOnly"`
	Wc                  *string  `queryParam:"style=form,explode=true,name=wc"`
}

type CabwiseGetRequest struct {
	QueryParams CabwiseGetQueryParams
}

type CabwiseGetResponse struct {
	Body         []byte
	ContentType  string
	StatusCode   int64
	SystemObject map[string]interface{}
}
