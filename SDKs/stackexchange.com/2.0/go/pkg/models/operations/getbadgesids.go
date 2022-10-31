package operations



type GetBadgesIdsPathParams struct {
    Ids string `pathParam:"style=simple,explode=false,name=ids"`
    
}


type GetBadgesIdsOrderEnum string

const (
    GetBadgesIdsOrderEnumDesc GetBadgesIdsOrderEnum = "desc"
GetBadgesIdsOrderEnumAsc GetBadgesIdsOrderEnum = "asc"
)



type GetBadgesIdsSortEnum string

const (
    GetBadgesIdsSortEnumRank GetBadgesIdsSortEnum = "rank"
GetBadgesIdsSortEnumName GetBadgesIdsSortEnum = "name"
GetBadgesIdsSortEnumType GetBadgesIdsSortEnum = "type"
)


type GetBadgesIdsQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetBadgesIdsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetBadgesIdsSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetBadgesIdsRequest struct {
    PathParams GetBadgesIdsPathParams 
    QueryParams GetBadgesIdsQueryParams 
    
}

type GetBadgesIdsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

