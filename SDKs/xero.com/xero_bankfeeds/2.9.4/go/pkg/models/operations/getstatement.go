package operations

import (
"openapi/pkg/models/shared")

type GetStatementPathParams struct {
    StatementID string `pathParam:"style=simple,explode=false,name=statementID"`
    
}

type GetStatementQueryParams struct {
    StatementID string `queryParam:"style=form,explode=true,name=statementId"`
    
}

type GetStatementHeaders struct {
    XeroTenantID string `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
    
}

type GetStatementSecurity struct {
    OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
    
}

type GetStatementRequest struct {
    PathParams GetStatementPathParams 
    QueryParams GetStatementQueryParams 
    Headers GetStatementHeaders 
    Security GetStatementSecurity 
    
}

type GetStatementResponse struct {
    ContentType string 
    Statement *shared.Statement 
    StatusCode int64 
    
}

