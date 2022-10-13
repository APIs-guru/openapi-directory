package operations

type HooksGetActionEnum string

const (
	HooksGetActionEnumRead HooksGetActionEnum = "read"
)

type HooksGetQueryParams struct {
	Action HooksGetActionEnum `queryParam:"style=form,explode=true,name=action"`
}

type HooksGetRequest struct {
	QueryParams HooksGetQueryParams
}

type HooksGet200ApplicationJSONHooks struct {
	Created       *string `json:"created"`
	EventType     *string `json:"event_type"`
	ID            *string `json:"id"`
	RequestMethod *string `json:"request_method"`
	TargetURL     *string `json:"target_url"`
}

type HooksGet200ApplicationJSON struct {
	Hooks   []HooksGet200ApplicationJSONHooks `json:"hooks"`
	Success *bool                             `json:"success"`
}

type HooksGetResponse struct {
	ContentType                      string
	HooksGet200ApplicationJSONObject *HooksGet200ApplicationJSON
	StatusCode                       int64
}
