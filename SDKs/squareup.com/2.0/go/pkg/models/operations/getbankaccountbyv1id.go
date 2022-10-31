package operations

import (
"openapi/pkg/models/shared")

type GetBankAccountByV1IDPathParams struct {
    V1BankAccountID string `pathParam:"style=simple,explode=false,name=v1_bank_account_id"`
    
}

type GetBankAccountByV1IDSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetBankAccountByV1IDRequest struct {
    PathParams GetBankAccountByV1IDPathParams 
    Security GetBankAccountByV1IDSecurity 
    
}

type GetBankAccountByV1IDResponse struct {
    ContentType string 
    GetBankAccountByV1IDResponse *shared.GetBankAccountByV1IDResponse 
    StatusCode int64 
    
}

