package operations

import (
"openapi/pkg/models/shared")

type GetVideoPrivacyUsersAlt1PathParams struct {
    ChannelID float64 `pathParam:"style=simple,explode=false,name=channel_id"`
    VideoID float64 `pathParam:"style=simple,explode=false,name=video_id"`
    
}

type GetVideoPrivacyUsersAlt1QueryParams struct {
    Page *float64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *float64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GetVideoPrivacyUsersAlt1Request struct {
    PathParams GetVideoPrivacyUsersAlt1PathParams 
    QueryParams GetVideoPrivacyUsersAlt1QueryParams 
    
}

type GetVideoPrivacyUsersAlt1Response struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    Users []shared.User 
    
}

