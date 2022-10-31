package operations



type GetUsersIdsMentionedPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetUsersIdsMentionedOrderEnum string

const (
    GetUsersIdsMentionedOrderEnumDesc GetUsersIdsMentionedOrderEnum = "desc"
GetUsersIdsMentionedOrderEnumAsc GetUsersIdsMentionedOrderEnum = "asc"
)



type GetUsersIdsMentionedSortEnum string

const (
    GetUsersIdsMentionedSortEnumCreation GetUsersIdsMentionedSortEnum = "creation"
GetUsersIdsMentionedSortEnumVotes GetUsersIdsMentionedSortEnum = "votes"
)


type GetUsersIdsMentionedQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetUsersIdsMentionedOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetUsersIdsMentionedSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetUsersIdsMentionedRequest struct {
    PathParams GetUsersIdsMentionedPathParams 
    QueryParams GetUsersIdsMentionedQueryParams 
    
}

type GetUsersIdsMentionedResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

