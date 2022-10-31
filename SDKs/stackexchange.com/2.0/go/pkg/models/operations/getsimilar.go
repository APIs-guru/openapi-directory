package operations




type GetSimilarOrderEnum string

const (
    GetSimilarOrderEnumDesc GetSimilarOrderEnum = "desc"
GetSimilarOrderEnumAsc GetSimilarOrderEnum = "asc"
)



type GetSimilarSortEnum string

const (
    GetSimilarSortEnumActivity GetSimilarSortEnum = "activity"
GetSimilarSortEnumCreation GetSimilarSortEnum = "creation"
GetSimilarSortEnumVotes GetSimilarSortEnum = "votes"
GetSimilarSortEnumRelevance GetSimilarSortEnum = "relevance"
)


type GetSimilarQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Nottagged *string `queryParam:"style=form,explode=true,name=nottagged"`
    Order *GetSimilarOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetSimilarSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Tagged *string `queryParam:"style=form,explode=true,name=tagged"`
    Title *string `queryParam:"style=form,explode=true,name=title"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetSimilarRequest struct {
    QueryParams GetSimilarQueryParams 
    
}

type GetSimilarResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

