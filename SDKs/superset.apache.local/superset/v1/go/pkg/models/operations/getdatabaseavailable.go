package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabaseAvailableSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabaseAvailableRequest struct {
	Security GetDatabaseAvailableSecurity
}

type GetDatabaseAvailable200ApplicationJSON struct {
	AvailableDrivers         []string               `json:"available_drivers"`
	DefaultDriver            *string                `json:"default_driver"`
	Engine                   *string                `json:"engine"`
	Name                     *string                `json:"name"`
	Parameters               map[string]interface{} `json:"parameters"`
	Preferred                *bool                  `json:"preferred"`
	SqlalchemyURIPlaceholder *string                `json:"sqlalchemy_uri_placeholder"`
}

type GetDatabaseAvailable400ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseAvailable500ApplicationJSON struct {
	Message *string `json:"message"`
}

type GetDatabaseAvailableResponse struct {
	ContentType                                   string
	GetDatabaseAvailable200ApplicationJSONObjects []GetDatabaseAvailable200ApplicationJSON
	GetDatabaseAvailable400ApplicationJSONObject  *GetDatabaseAvailable400ApplicationJSON
	GetDatabaseAvailable500ApplicationJSONObject  *GetDatabaseAvailable500ApplicationJSON
	StatusCode                                    int64
}
