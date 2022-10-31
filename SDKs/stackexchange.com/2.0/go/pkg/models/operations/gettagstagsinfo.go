package operations



type GetTagsTagsInfoPathParams struct {
    Tags string `pathParam:"style=simple,explode=false,name=tags"`
    
}


type GetTagsTagsInfoOrderEnum string

const (
    GetTagsTagsInfoOrderEnumDesc GetTagsTagsInfoOrderEnum = "desc"
GetTagsTagsInfoOrderEnumAsc GetTagsTagsInfoOrderEnum = "asc"
)



type GetTagsTagsInfoSortEnum string

const (
    GetTagsTagsInfoSortEnumPopular GetTagsTagsInfoSortEnum = "popular"
GetTagsTagsInfoSortEnumActivity GetTagsTagsInfoSortEnum = "activity"
GetTagsTagsInfoSortEnumName GetTagsTagsInfoSortEnum = "name"
)


type GetTagsTagsInfoQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Fromdate *int64 `queryParam:"style=form,explode=true,name=fromdate"`
    Max *string `queryParam:"style=form,explode=true,name=max"`
    Min *string `queryParam:"style=form,explode=true,name=min"`
    Order *GetTagsTagsInfoOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    Sort *GetTagsTagsInfoSortEnum `queryParam:"style=form,explode=true,name=sort"`
    Todate *int64 `queryParam:"style=form,explode=true,name=todate"`
    
}

type GetTagsTagsInfoRequest struct {
    PathParams GetTagsTagsInfoPathParams 
    QueryParams GetTagsTagsInfoQueryParams 
    
}

type GetTagsTagsInfoResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

