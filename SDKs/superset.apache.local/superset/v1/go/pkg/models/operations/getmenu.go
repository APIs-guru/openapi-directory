package operations

import (
	"openapi/pkg/models/shared"
)

type GetMenuSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetMenuRequest struct {
	Security GetMenuSecurity
}

type GetMenu200ApplicationJSONResult struct {
	Childs []map[string]interface{} `json:"childs"`
	Icon   *string                  `json:"icon"`
	Label  *string                  `json:"label"`
	Name   *string                  `json:"name"`
	URL    *string                  `json:"url"`
}

type GetMenu200ApplicationJSON struct {
	Result []GetMenu200ApplicationJSONResult `json:"result"`
}

type GetMenu401ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetMenuResponse struct {
	ContentType                     string
	GetMenu200ApplicationJSONObject *GetMenu200ApplicationJSON
	GetMenu401ApplicationJSONObject *GetMenu401ApplicationJSON
	StatusCode                      int64
}
