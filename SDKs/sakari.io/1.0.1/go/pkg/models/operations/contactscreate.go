package operations

import (
	"openapi/pkg/models/shared"
)

type ContactsCreatePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type ContactsCreateMergeStrategyEnum string

const (
	ContactsCreateMergeStrategyEnumAppend ContactsCreateMergeStrategyEnum = "append"
	ContactsCreateMergeStrategyEnumCore   ContactsCreateMergeStrategyEnum = "core"
	ContactsCreateMergeStrategyEnumRemove ContactsCreateMergeStrategyEnum = "remove"
)

type ContactsCreateQueryParams struct {
	MergeStrategy *ContactsCreateMergeStrategyEnum `queryParam:"style=form,explode=true,name=mergeStrategy"`
}

type ContactsCreateRequests struct {
	ContactRequest *shared.ContactRequest `request:"mediaType=application/json"`
	String         *string                `request:"mediaType=text/csv"`
}

type ContactsCreateSecurity struct {
	SakariAuth shared.SchemeSakariAuth `security:"scheme,type=oauth2"`
}

type ContactsCreateRequest struct {
	PathParams  ContactsCreatePathParams
	QueryParams ContactsCreateQueryParams
	Request     *ContactsCreateRequests
	Security    ContactsCreateSecurity
}

type ContactsCreateResponse struct {
	ContentType                           string
	StatusCode                            int64
	ContactsCreate201ApplicationJSONOneOf *interface{}
}
