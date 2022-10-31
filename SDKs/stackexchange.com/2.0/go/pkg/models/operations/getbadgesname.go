package operations




type GetBadgesNameOrderEnum string

const (
    GetBadgesNameOrderEnumDesc GetBadgesNameOrderEnum = "desc"
GetBadgesNameOrderEnumAsc GetBadgesNameOrderEnum = "asc"
)



type GetBadgesNameSortEnum string

const (
    GetBadgesNameSortEnumRank GetBadgesNameSortEnum = "rank"
GetBadgesNameSortEnumName GetBadgesNameSortEnum = "name"
)


type GetBadgesNameQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Inname *string `queryParam:"style=form,explode=true,name=inname"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetBadgesNameOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetBadgesNameSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetBadgesNameRequest struct {
    QueryParams GetBadgesNameQueryParams 
    
}

type GetBadgesNameResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

