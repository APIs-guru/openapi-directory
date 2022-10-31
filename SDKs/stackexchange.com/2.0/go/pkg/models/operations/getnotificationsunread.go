package operations



type GetNotificationsUnreadQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    
}

type GetNotificationsUnreadRequest struct {
    QueryParams GetNotificationsUnreadQueryParams 
    
}

type GetNotificationsUnreadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

