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
	Body                                []byte
	ContactsGet200ApplicationJSONString *string
	ContentType                         string
	StatusCode                          int64
}
