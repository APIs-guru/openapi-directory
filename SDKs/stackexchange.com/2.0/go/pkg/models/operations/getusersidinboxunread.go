package operations



type GetUsersIDInboxUnreadPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetUsersIDInboxUnreadQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Since *int64 `queryParam:"style=form,explode=true,name=since"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetUsersIDInboxUnreadRequest struct {
    PathParams GetUsersIDInboxUnreadPathParams 
    QueryParams GetUsersIDInboxUnreadQueryParams 
    
}

type GetUsersIDInboxUnreadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

