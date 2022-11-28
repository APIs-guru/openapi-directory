import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateReportModelReportTypeEnum {
    MaliciousIp = "MaliciousIP",
    Spamming = "Spamming",
    RemovePermissions = "RemovePermissions",
    Other = "Other"
}
export declare class CreateReportModel extends SpeakeasyBase {
    reason?: string;
    reportType?: CreateReportModelReportTypeEnum;
}
