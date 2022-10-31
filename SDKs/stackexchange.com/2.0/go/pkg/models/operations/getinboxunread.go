package operations



type GetInboxUnreadQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    
}

type GetInboxUnreadRequest struct {
    QueryParams GetInboxUnreadQueryParams 
    
}

type GetInboxUnreadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

