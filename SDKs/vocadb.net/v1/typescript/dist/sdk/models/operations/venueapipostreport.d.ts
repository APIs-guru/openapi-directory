import { SpeakeasyBase } from "../../../internal/utils";
export declare class VenueApiPostReportPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum VenueApiPostReportReportTypeEnum {
    InvalidInfo = "InvalidInfo",
    Duplicate = "Duplicate",
    Inappropriate = "Inappropriate",
    Other = "Other"
}
export declare class VenueApiPostReportQueryParams extends SpeakeasyBase {
    notes: string;
    reportType: VenueApiPostReportReportTypeEnum;
    versionNumber: number;
}
export declare class VenueApiPostReportRequest extends SpeakeasyBase {
    pathParams: VenueApiPostReportPathParams;
    queryParams: VenueApiPostReportQueryParams;
}
export declare class VenueApiPostReportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
