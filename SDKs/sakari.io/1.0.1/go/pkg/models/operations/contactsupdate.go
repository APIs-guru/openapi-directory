package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsUpdatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type ContactsUpdateSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ContactsUpdateRequest struct {
	PathParams ContactsUpdatePathParams
	Security   ContactsUpdateSecurity
}

type ContactsUpdateResponse struct {
	ContactResponse *shared.ContactResponse
	ContentType     string
	StatusCode      int64
}
