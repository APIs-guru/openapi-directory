package operations



type GetMeInboxUnreadQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetMeInboxUnreadRequest struct {
    QueryParams GetMeInboxUnreadQueryParams 
    
}

type GetMeInboxUnreadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

