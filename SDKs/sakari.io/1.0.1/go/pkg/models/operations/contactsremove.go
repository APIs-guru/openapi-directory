package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsRemovePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type ContactsRemoveSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ContactsRemoveRequest struct {
	PathParams ContactsRemovePathParams
	Security   ContactsRemoveSecurity
}

type ContactsRemove200ApplicationJSON struct {
	Success *bool `json:"success"`
}

type ContactsRemoveResponse struct {
	ContentType                            string
	StatusCode                             int64
	ContactsRemove200ApplicationJSONObject *ContactsRemove200ApplicationJSON
}
