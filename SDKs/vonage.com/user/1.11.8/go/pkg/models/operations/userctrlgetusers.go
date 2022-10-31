package operations

import (
"openapi/pkg/models/shared")

type UserCtrlGetUsersPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=account_id"`
    
}

type UserCtrlGetUsersQueryParams struct {
    Email *string `queryParam:"style=form,explode=true,name=email"`
    FirstName *string `queryParam:"style=form,explode=true,name=first_name"`
    LastName *string `queryParam:"style=form,explode=true,name=last_name"`
    LoginName *string `queryParam:"style=form,explode=true,name=login_name"`
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PageSize *float64 `queryParam:"style=form,explode=true,name=page_size"`
    
}

type UserCtrlGetUsersSecurity struct {
    BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
    
}

type UserCtrlGetUsersRequest struct {
    PathParams UserCtrlGetUsersPathParams 
    QueryParams UserCtrlGetUsersQueryParams 
    Security UserCtrlGetUsersSecurity 
    
}

type UserCtrlGetUsersResponse struct {
    ContentType string 
    StatusCode int64 
    UsersHalResponse *shared.UsersHalResponse 
    ValidationErrorsResponse *shared.ValidationErrorsResponse 
    
}

