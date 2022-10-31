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
	Childs []map[string]interface{} `json:"childs,omitempty"`
	Icon   *string                  `json:"icon,omitempty"`
	Label  *string                  `json:"label,omitempty"`
	Name   *string                  `json:"name,omitempty"`
	URL    *string                  `json:"url,omitempty"`
}

type GetMenu200ApplicationJSON struct {
	Result []GetMenu200ApplicationJSONResult `json:"result,omitempty"`
}

type GetMenu401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetMenuResponse struct {
	ContentType                     string
	GetMenu200ApplicationJSONObject *GetMenu200ApplicationJSON
	GetMenu401ApplicationJSONObject *GetMenu401ApplicationJSON
	StatusCode                      int64
}
