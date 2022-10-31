package operations



type VenueAPIPostReportPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}


type VenueAPIPostReportReportTypeEnum string

const (
    VenueAPIPostReportReportTypeEnumInvalidInfo VenueAPIPostReportReportTypeEnum = "InvalidInfo"
VenueAPIPostReportReportTypeEnumDuplicate VenueAPIPostReportReportTypeEnum = "Duplicate"
VenueAPIPostReportReportTypeEnumInappropriate VenueAPIPostReportReportTypeEnum = "Inappropriate"
VenueAPIPostReportReportTypeEnumOther VenueAPIPostReportReportTypeEnum = "Other"
)


type VenueAPIPostReportQueryParams struct {
    Notes string `queryParam:"style=form,explode=true,name=notes"`
    ReportType VenueAPIPostReportReportTypeEnum `queryParam:"style=form,explode=true,name=reportType"`
    VersionNumber int32 `queryParam:"style=form,explode=true,name=versionNumber"`
    
}

type VenueAPIPostReportRequest struct {
    PathParams VenueAPIPostReportPathParams 
    QueryParams VenueAPIPostReportQueryParams 
    
}

type VenueAPIPostReportResponse struct {
    ContentType string 
    StatusCode int64 
    
}

