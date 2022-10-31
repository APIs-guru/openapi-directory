package operations




type GetTagsTagTopAnswerersPeriodPeriodEnum string

const (
    GetTagsTagTopAnswerersPeriodPeriodEnumAllTime GetTagsTagTopAnswerersPeriodPeriodEnum = "all_time"
GetTagsTagTopAnswerersPeriodPeriodEnumMonth GetTagsTagTopAnswerersPeriodPeriodEnum = "month"
)


type GetTagsTagTopAnswerersPeriodPathParams struct {
    Period GetTagsTagTopAnswerersPeriodPeriodEnum `pathParam:"style=simple,explode=false,name=period"`
    Tag string `pathParam:"style=simple,explode=false,name=tag"`
    
}

type GetTagsTagTopAnswerersPeriodQueryParams struct {
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    Pagesize *int64 `queryParam:"style=form,explode=true,name=pagesize"`
    Site string `queryParam:"style=form,explode=true,name=site"`
    
}

type GetTagsTagTopAnswerersPeriodRequest struct {
    PathParams GetTagsTagTopAnswerersPeriodPathParams 
    QueryParams GetTagsTagTopAnswerersPeriodQueryParams 
    
}

type GetTagsTagTopAnswerersPeriodResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

