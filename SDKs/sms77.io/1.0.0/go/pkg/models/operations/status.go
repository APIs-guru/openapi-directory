package operations

type StatusQueryParams struct {
	MsgID string `queryParam:"style=form,explode=true,name=msg_id"`
}

type StatusRequest struct {
	QueryParams StatusQueryParams
}

type StatusResponse struct {
	ContentType              string
	StatusCode               int64
	Status200TextPlainString *string
}
