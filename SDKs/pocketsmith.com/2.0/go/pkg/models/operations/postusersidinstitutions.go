package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersIDInstitutionsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersIDInstitutionsRequestBody struct {
	CurrencyCode string `json:"currency_code"`
	Title        string `json:"title"`
}

type PostUsersIDInstitutionsRequest struct {
	PathParams PostUsersIDInstitutionsPathParams
	Request    *PostUsersIDInstitutionsRequestBody `request:"mediaType=application/json"`
}

type PostUsersIDInstitutionsResponse struct {
	ContentType string
	Error       *shared.Error
	Institution *shared.Institution
	StatusCode  int64
}
