package operations

import (
"time"
"openapi/pkg/models/shared")

type GetTransactionsByPayeePathParams struct {
    BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
    PayeeID string `pathParam:"style=simple,explode=false,name=payee_id"`
    
}


type GetTransactionsByPayeeTypeEnum string

const (
    GetTransactionsByPayeeTypeEnumUncategorized GetTransactionsByPayeeTypeEnum = "uncategorized"
GetTransactionsByPayeeTypeEnumUnapproved GetTransactionsByPayeeTypeEnum = "unapproved"
)


type GetTransactionsByPayeeQueryParams struct {
    LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
    SinceDate *time.Time `queryParam:"style=form,explode=true,name=since_date"`
    Type *GetTransactionsByPayeeTypeEnum `queryParam:"style=form,explode=true,name=type"`
    
}

type GetTransactionsByPayeeRequest struct {
    PathParams GetTransactionsByPayeePathParams 
    QueryParams GetTransactionsByPayeeQueryParams 
    
}

type GetTransactionsByPayeeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    HybridTransactionsResponse *shared.HybridTransactionsResponse 
    StatusCode int64 
    
}

