package operations




type GetMeSuggestedEditsOrderEnum string

const (
    GetMeSuggestedEditsOrderEnumDesc GetMeSuggestedEditsOrderEnum = "desc"
GetMeSuggestedEditsOrderEnumAsc GetMeSuggestedEditsOrderEnum = "asc"
)



type GetMeSuggestedEditsSortEnum string

const (
    GetMeSuggestedEditsSortEnumCreation GetMeSuggestedEditsSortEnum = "creation"
GetMeSuggestedEditsSortEnumApproval GetMeSuggestedEditsSortEnum = "approval"
GetMeSuggestedEditsSortEnumRejection GetMeSuggestedEditsSortEnum = "rejection"
)


type GetMeSuggestedEditsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetMeSuggestedEditsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetMeSuggestedEditsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetMeSuggestedEditsRequest struct {
    QueryParams GetMeSuggestedEditsQueryParams 
    
}

type GetMeSuggestedEditsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

