package operations

type ContactsPostActionEnum string

const (
	ContactsPostActionEnumDel   ContactsPostActionEnum = "del"
	ContactsPostActionEnumWrite ContactsPostActionEnum = "write"
)

type ContactsPostQueryParams struct {
	Action     ContactsPostActionEnum `queryParam:"style=form,explode=true,name=action"`
	Email      *string                `queryParam:"style=form,explode=true,name=email"`
	Empfaenger *string                `queryParam:"style=form,explode=true,name=empfaenger"`
	ID         *string                `queryParam:"style=form,explode=true,name=id"`
	JSON       *float64               `queryParam:"style=form,explode=true,name=json"`
	Nick       *string                `queryParam:"style=form,explode=true,name=nick"`
}

type ContactsPostRequest struct {
	QueryParams ContactsPostQueryParams
}

type ContactsPostResponse struct {
	ContactsPost200ApplicationJSONString *string
	ContactsPost200TextPlainString       *string
	ContentType                          string
	StatusCode                           int64
}
