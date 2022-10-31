package operations

import (
	"openapi/pkg/models/shared"
)

type GetBankAccountPathParams struct {
	BankAccountID string `pathParam:"style=simple,explode=false,name=bank_account_id"`
}

type GetBankAccountSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GetBankAccountRequest struct {
	PathParams GetBankAccountPathParams
	Security   GetBankAccountSecurity
}

type GetBankAccountResponse struct {
	ContentType            string
	GetBankAccountResponse *shared.GetBankAccountResponse
	StatusCode             int64
}
