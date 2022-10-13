package operations

import (
	"openapi/pkg/models/shared"
)

type GetAsyncEventQueryParams struct {
	LastID *string `queryParam:"style=form,explode=true,name=last_id"`
}

type GetAsyncEventSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetAsyncEventRequest struct {
	QueryParams GetAsyncEventQueryParams
	Security    GetAsyncEventSecurity
}

type GetAsyncEvent200ApplicationJSONResult struct {
	ChannelID *string                  `json:"channel_id"`
	Errors    []map[string]interface{} `json:"errors"`
	ID        *string                  `json:"id"`
	JobID     *string                  `json:"job_id"`
	ResultURL *string                  `json:"result_url"`
	Status    *string                  `json:"status"`
	UserID    *int64                   `json:"user_id"`
}

type GetAsyncEvent200ApplicationJSON struct {
	Result []GetAsyncEvent200ApplicationJSONResult `json:"result"`
}

type GetAsyncEvent401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAsyncEvent500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetAsyncEventResponse struct {
	ContentType                           string
	GetAsyncEvent200ApplicationJSONObject *GetAsyncEvent200ApplicationJSON
	GetAsyncEvent401ApplicationJSONObject *GetAsyncEvent401ApplicationJSON
	GetAsyncEvent500ApplicationJSONObject *GetAsyncEvent500ApplicationJSON
	StatusCode                            int64
}
