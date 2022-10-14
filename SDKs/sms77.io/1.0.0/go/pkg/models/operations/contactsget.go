package operations

type ContactsGetActionEnum string

const (
	ContactsGetActionEnumRead ContactsGetActionEnum = "read"
)

type ContactsGetQueryParams struct {
	Action ContactsGetActionEnum `queryParam:"style=form,explode=true,name=action"`
	JSON   *float64              `queryParam:"style=form,explode=true,name=json"`
}

type ContactsGetRequest struct {
	QueryParams ContactsGetQueryParams
}

type ContactsGetResponse struct {
	ContactsGet200ApplicationJSONString *string
	ContactsGet200TextCsvString         *string
	ContentType                         string
	StatusCode                          int64
}
