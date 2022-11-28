import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRecipient } from "./reportrecipient";
import { ValidatorConfigJson } from "./validatorconfigjson";
export declare enum ReportScheduleRestApiPostReportFormatEnum {
    Png = "PNG",
    Csv = "CSV",
    Text = "TEXT"
}
export declare enum ReportScheduleRestApiPostTypeEnum {
    Alert = "Alert",
    Report = "Report"
}
export declare enum ReportScheduleRestApiPostValidatorTypeEnum {
    NotNull = "not null",
    Operator = "operator"
}
export declare class ReportScheduleRestApiPost extends SpeakeasyBase {
    active?: boolean;
    chart?: number;
    contextMarkdown?: string;
    creationMethod?: any;
    crontab: string;
    dashboard?: number;
    database?: number;
    description?: string;
    gracePeriod?: number;
    logRetention?: number;
    name: string;
    owners?: number[];
    recipients?: ReportRecipient[];
    reportFormat?: ReportScheduleRestApiPostReportFormatEnum;
    sql?: string;
    timezone?: string;
    type: ReportScheduleRestApiPostTypeEnum;
    validatorConfigJson?: ValidatorConfigJson;
    validatorType?: ReportScheduleRestApiPostValidatorTypeEnum;
    workingTimeout?: number;
}
