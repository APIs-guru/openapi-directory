import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReleaseEventApiPostReportPathParams extends SpeakeasyBase {
    eventId: number;
}
export declare enum ReleaseEventApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}
export declare class ReleaseEventApiPostReportQueryParams extends SpeakeasyBase {
    notes: string;
    reportType: ReleaseEventApiPostReportReportTypeEnum;
    versionNumber: number;
}
export declare class ReleaseEventApiPostReportRequest extends SpeakeasyBase {
    pathParams: ReleaseEventApiPostReportPathParams;
    queryParams: ReleaseEventApiPostReportQueryParams;
}
export declare class ReleaseEventApiPostReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
