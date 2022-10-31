package operations




type GetTagsTagTopAskersPeriodPeriodEnum string

const (
    GetTagsTagTopAskersPeriodPeriodEnumAllTime GetTagsTagTopAskersPeriodPeriodEnum = "all_time"
GetTagsTagTopAskersPeriodPeriodEnumMonth GetTagsTagTopAskersPeriodPeriodEnum = "month"
)


type GetTagsTagTopAskersPeriodPathParams struct {
    Period GetTagsTagTopAskersPeriodPeriodEnum `pathParam:"style=simple,explode=false,name=period"`
    Tag string `pathParam:"style=simple,explode=false,name=tag"`
    
}

type GetTagsTagTopAskersPeriodQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetTagsTagTopAskersPeriodRequest struct {
    PathParams GetTagsTagTopAskersPeriodPathParams 
    QueryParams GetTagsTagTopAskersPeriodQueryParams 
    
}

type GetTagsTagTopAskersPeriodResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

