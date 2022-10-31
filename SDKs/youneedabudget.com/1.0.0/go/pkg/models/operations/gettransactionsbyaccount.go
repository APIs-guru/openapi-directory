package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTransactionsByAccountPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    
}


type GetTransactionsByAccountTypeEnum string

const (
    GetTransactionsByAccountTypeEnumUncategorized GetTransactionsByAccountTypeEnum = "uncategorized"
GetTransactionsByAccountTypeEnumUnapproved GetTransactionsByAccountTypeEnum = "unapproved"
)


type GetTransactionsByAccountQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    SinceDate *time.Time `queryParam:"style=form,explode=true,name=since_date"`
    Type *GetTransactionsByAccountTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetTransactionsByAccountRequest struct {
    PathParams GetTransactionsByAccountPathParams 
    QueryParams GetTransactionsByAccountQueryParams 
    
}

type GetTransactionsByAccountResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    TransactionsResponse *shared.TransactionsResponse 
    
}

