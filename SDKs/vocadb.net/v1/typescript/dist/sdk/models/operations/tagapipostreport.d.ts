import { SpeakeasyBase } from "../../../internal/utils";
export declare class TagApiPostReportPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}
export declare class TagApiPostReportQueryParams extends SpeakeasyBase {
    notes: string;
    reportType: TagApiPostReportReportTypeEnum;
    versionNumber: number;
}
export declare class TagApiPostReportRequest extends SpeakeasyBase {
    pathParams: TagApiPostReportPathParams;
    queryParams: TagApiPostReportQueryParams;
}
export declare class TagApiPostReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
