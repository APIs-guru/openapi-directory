package operations




type GetTagsModeratorOnlyOrderEnum string

const (
    GetTagsModeratorOnlyOrderEnumDesc GetTagsModeratorOnlyOrderEnum = "desc"
GetTagsModeratorOnlyOrderEnumAsc GetTagsModeratorOnlyOrderEnum = "asc"
)



type GetTagsModeratorOnlySortEnum string

const (
    GetTagsModeratorOnlySortEnumPopular GetTagsModeratorOnlySortEnum = "popular"
GetTagsModeratorOnlySortEnumActivity GetTagsModeratorOnlySortEnum = "activity"
GetTagsModeratorOnlySortEnumName GetTagsModeratorOnlySortEnum = "name"
)


type GetTagsModeratorOnlyQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Inname *string `queryParam:"style=form,explode=true,name=inname"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetTagsModeratorOnlyOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetTagsModeratorOnlySortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetTagsModeratorOnlyRequest struct {
    QueryParams GetTagsModeratorOnlyQueryParams 
    
}

type GetTagsModeratorOnlyResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

