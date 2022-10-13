package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsFetchPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	ContactID string `pathParam:"style=simple,explode=false,name=contactId"`
}

type ContactsFetchSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ContactsFetchRequest struct {
	PathParams ContactsFetchPathParams
	Security   ContactsFetchSecurity
}

type ContactsFetchResponse struct {
	ContactResponse *shared.ContactResponse
	ContentType     string
	StatusCode      int64
}
