package operations




type GetMeBadgesOrderEnum string

const (
    GetMeBadgesOrderEnumDesc GetMeBadgesOrderEnum = "desc"
GetMeBadgesOrderEnumAsc GetMeBadgesOrderEnum = "asc"
)



type GetMeBadgesSortEnum string

const (
    GetMeBadgesSortEnumRank GetMeBadgesSortEnum = "rank"
GetMeBadgesSortEnumName GetMeBadgesSortEnum = "name"
GetMeBadgesSortEnumType GetMeBadgesSortEnum = "type"
)


type GetMeBadgesQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetMeBadgesOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetMeBadgesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetMeBadgesRequest struct {
    QueryParams GetMeBadgesQueryParams 
    
}

type GetMeBadgesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

