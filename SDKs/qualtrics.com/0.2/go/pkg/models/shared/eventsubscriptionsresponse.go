package shared

type EventSubscriptionsResponseMeta struct {
	HTTPStatus *string `json:"httpStatus"`
	RequestID  *string `json:"requestId"`
}

type EventSubscriptionsResponseResultMeta struct {
	HTTPStatus *string `json:"httpStatus"`
}

type EventSubscriptionsResponseResultResult struct {
	ID *string `json:"id"`
}

type EventSubscriptionsResponseResult struct {
	Meta   *EventSubscriptionsResponseResultMeta   `json:"meta"`
	Result *EventSubscriptionsResponseResultResult `json:"result"`
}

type EventSubscriptionsResponse struct {
	Meta   *EventSubscriptionsResponseMeta   `json:"meta"`
	Result *EventSubscriptionsResponseResult `json:"result"`
}
