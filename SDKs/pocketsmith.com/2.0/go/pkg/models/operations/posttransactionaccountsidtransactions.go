package operations

import (
"openapi/pkg/models/shared")

type PostTransactionAccountsIDTransactionsPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostTransactionAccountsIDTransactionsRequestBody struct {
    Amount float64 `json:"amount"`
    CategoryID *int64 `json:"category_id,omitempty"`
    ChequeNumber *string `json:"cheque_number,omitempty"`
    Date string `json:"date"`
    IsTransfer *bool `json:"is_transfer,omitempty"`
    Labels *string `json:"labels,omitempty"`
    Memo *string `json:"memo,omitempty"`
    Note *string `json:"note,omitempty"`
    Payee string `json:"payee"`
    
}

type PostTransactionAccountsIDTransactionsRequest struct {
    PathParams PostTransactionAccountsIDTransactionsPathParams 
    Request *PostTransactionAccountsIDTransactionsRequestBody `request:"mediaType=application/json"`
    
}

type PostTransactionAccountsIDTransactionsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    Transaction *shared.Transaction 
    
}

