package operations



type GetUsersIdsSuggestedEditsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsSuggestedEditsOrderEnum string

const (
    GetUsersIdsSuggestedEditsOrderEnumDesc GetUsersIdsSuggestedEditsOrderEnum = "desc"
GetUsersIdsSuggestedEditsOrderEnumAsc GetUsersIdsSuggestedEditsOrderEnum = "asc"
)



type GetUsersIdsSuggestedEditsSortEnum string

const (
    GetUsersIdsSuggestedEditsSortEnumCreation GetUsersIdsSuggestedEditsSortEnum = "creation"
GetUsersIdsSuggestedEditsSortEnumApproval GetUsersIdsSuggestedEditsSortEnum = "approval"
GetUsersIdsSuggestedEditsSortEnumRejection GetUsersIdsSuggestedEditsSortEnum = "rejection"
)


type GetUsersIdsSuggestedEditsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsSuggestedEditsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsSuggestedEditsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsSuggestedEditsRequest struct {
    PathParams GetUsersIdsSuggestedEditsPathParams 
    QueryParams GetUsersIdsSuggestedEditsQueryParams 
    
}

type GetUsersIdsSuggestedEditsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

