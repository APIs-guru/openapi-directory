package operations




type GetBadgesOrderEnum string

const (
    GetBadgesOrderEnumDesc GetBadgesOrderEnum = "desc"
GetBadgesOrderEnumAsc GetBadgesOrderEnum = "asc"
)



type GetBadgesSortEnum string

const (
    GetBadgesSortEnumRank GetBadgesSortEnum = "rank"
GetBadgesSortEnumName GetBadgesSortEnum = "name"
GetBadgesSortEnumType GetBadgesSortEnum = "type"
)


type GetBadgesQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Inname *string `queryParam:"style=form,explode=true,name=inname"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetBadgesOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetBadgesSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetBadgesRequest struct {
    QueryParams GetBadgesQueryParams 
    
}

type GetBadgesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

