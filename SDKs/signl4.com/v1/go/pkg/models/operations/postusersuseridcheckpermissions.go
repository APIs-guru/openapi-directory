package operations

import (
"openapi/pkg/models/shared")

type PostUsersUserIDCheckPermissionsPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type PostUsersUserIDCheckPermissionsQueryParams struct {
    TeamID *string `queryParam:"style=form,explode=true,name=teamId"`
    
}

type PostUsersUserIDCheckPermissionsRequests struct {
    StringItemsWrapper *shared.StringItemsWrapper `request:"mediaType=application/*+json"`
    StringItemsWrapper1 *shared.StringItemsWrapper `request:"mediaType=application/json"`
    StringItemsWrapper2 *shared.StringItemsWrapper `request:"mediaType=application/json-patch+json"`
    StringItemsWrapper3 *shared.StringItemsWrapper `request:"mediaType=text/json"`
    
}

type PostUsersUserIDCheckPermissionsRequest struct {
    PathParams PostUsersUserIDCheckPermissionsPathParams 
    QueryParams PostUsersUserIDCheckPermissionsQueryParams 
    Request *PostUsersUserIDCheckPermissionsRequests 
    
}

type PostUsersUserIDCheckPermissionsResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserImage *shared.UserImage 
    
}

