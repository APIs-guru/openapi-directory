package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContactInMailinglistPathParams struct {
	DirectoryID   string `pathParam:"style=simple,explode=false,name=DirectoryId"`
	MailingListID string `pathParam:"style=simple,explode=false,name=MailingListId"`
}

type CreateContactInMailinglistRequest struct {
	PathParams CreateContactInMailinglistPathParams
	Request    shared.CreateContactInMailingList `request:"mediaType=application/json"`
}

type CreateContactInMailinglistResponse struct {
	ContentType string
	StatusCode  int64
}
