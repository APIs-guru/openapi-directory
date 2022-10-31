package operations

import (
"openapi/pkg/models/shared")

type GetUsersUserIDImagePathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetUsersUserIDImageQueryParams struct {
    Height *int32 `queryParam:"style=form,explode=true,name=height"`
    Width *int32 `queryParam:"style=form,explode=true,name=width"`
    
}

type GetUsersUserIDImageRequest struct {
    PathParams GetUsersUserIDImagePathParams 
    QueryParams GetUsersUserIDImageQueryParams 
    
}

type GetUsersUserIDImageResponse struct {
    Body []byte 
    ContentType string 
    ErrorResponseContent *shared.ErrorResponseContent 
    StatusCode int64 
    UserImage *shared.UserImage 
    
}

