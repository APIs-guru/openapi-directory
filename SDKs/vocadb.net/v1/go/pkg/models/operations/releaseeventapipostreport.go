package operations



type ReleaseEventAPIPostReportPathParams struct {
    EventID int32 `pathParam:"style=simple,explode=false,name=eventId"`
    
}


type ReleaseEventAPIPostReportReportTypeEnum string

const (
    ReleaseEventAPIPostReportReportTypeEnumInvalidInfo ReleaseEventAPIPostReportReportTypeEnum = "InvalidInfo"
ReleaseEventAPIPostReportReportTypeEnumDuplicate ReleaseEventAPIPostReportReportTypeEnum = "Duplicate"
ReleaseEventAPIPostReportReportTypeEnumInappropriate ReleaseEventAPIPostReportReportTypeEnum = "Inappropriate"
ReleaseEventAPIPostReportReportTypeEnumOther ReleaseEventAPIPostReportReportTypeEnum = "Other"
)


type ReleaseEventAPIPostReportQueryParams struct {
    Notes string `queryParam:"style=form,explode=true,name=notes"`
    ReportType ReleaseEventAPIPostReportReportTypeEnum `queryParam:"style=form,explode=true,name=reportType"`
    VersionNumber int32 `queryParam:"style=form,explode=true,name=versionNumber"`
    
}

type ReleaseEventAPIPostReportRequest struct {
    PathParams ReleaseEventAPIPostReportPathParams 
    QueryParams ReleaseEventAPIPostReportQueryParams 
    
}

type ReleaseEventAPIPostReportResponse struct {
    ContentType string 
    StatusCode int64 
    
}

