package operations

type TagAPIPostReportPathParams struct {
	TagID int32 `pathParam:"style=simple,explode=false,name=tagId"`
}

type TagAPIPostReportReportTypeEnum string

const (
	TagAPIPostReportReportTypeEnumInvalidInfo   TagAPIPostReportReportTypeEnum = "InvalidInfo"
	TagAPIPostReportReportTypeEnumDuplicate     TagAPIPostReportReportTypeEnum = "Duplicate"
	TagAPIPostReportReportTypeEnumInappropriate TagAPIPostReportReportTypeEnum = "Inappropriate"
	TagAPIPostReportReportTypeEnumOther         TagAPIPostReportReportTypeEnum = "Other"
)

type TagAPIPostReportQueryParams struct {
	Notes         string                         `queryParam:"style=form,explode=true,name=notes"`
	ReportType    TagAPIPostReportReportTypeEnum `queryParam:"style=form,explode=true,name=reportType"`
	VersionNumber int32                          `queryParam:"style=form,explode=true,name=versionNumber"`
}

type TagAPIPostReportRequest struct {
	PathParams  TagAPIPostReportPathParams
	QueryParams TagAPIPostReportQueryParams
}

type TagAPIPostReportResponse struct {
	ContentType string
	StatusCode  int64
}
