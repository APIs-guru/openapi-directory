package operations

type GetContentTypeEnum string

const (
	GetContentTypeEnumApplicationJSON GetContentTypeEnum = "application/json"
	GetContentTypeEnumTextHTML        GetContentTypeEnum = "text/html"
	GetContentTypeEnumTextXML         GetContentTypeEnum = "text/xml"
	GetContentTypeEnumApplicationXML  GetContentTypeEnum = "application/xml"
)

type GetHypermediaEnum string

const (
	GetHypermediaEnumYes GetHypermediaEnum = "yes"
	GetHypermediaEnumNo  GetHypermediaEnum = "no"
)

type GetQueryParams struct {
	ContentType *GetContentTypeEnum `queryParam:"style=form,explode=true,name=content-type"`
	Hypermedia  *GetHypermediaEnum  `queryParam:"style=form,explode=true,name=hypermedia"`
}

type GetRequest struct {
	QueryParams GetQueryParams
}

type Get200ApplicationJSONStatusEnum string

const (
	Get200ApplicationJSONStatusEnumOk Get200ApplicationJSONStatusEnum = "OK"
)

type Get200ApplicationJSON struct {
	Status *Get200ApplicationJSONStatusEnum `json:"status"`
}

type GetResponse struct {
	Body                        []byte
	ContentType                 string
	Get200ApplicationJSONObject *Get200ApplicationJSON
	StatusCode                  int64
}
