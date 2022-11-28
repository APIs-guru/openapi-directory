import { SpeakeasyBase } from "../../../internal/utils";
import { ReportRecipient } from "./reportrecipient";
import { ValidatorConfigJson } from "./validatorconfigjson";
export declare enum ReportScheduleRestApiPutReportFormatEnum {
    Png = "PNG",
    Csv = "CSV",
    Text = "TEXT"
}
export declare enum ReportScheduleRestApiPutTypeEnum {
    Alert = "Alert",
    Report = "Report"
}
export declare enum ReportScheduleRestApiPutValidatorTypeEnum {
    NotNull = "not null",
    Operator = "operator"
}
export declare class ReportScheduleRestApiPut extends SpeakeasyBase {
    active?: boolean;
    chart?: number;
    contextMarkdown?: string;
    creationMethod?: any;
    crontab?: string;
    dashboard?: number;
    database?: number;
    description?: string;
    gracePeriod?: number;
    logRetention?: number;
    name?: string;
    owners?: number[];
    recipients?: ReportRecipient[];
    reportFormat?: ReportScheduleRestApiPutReportFormatEnum;
    sql?: string;
    timezone?: string;
    type?: ReportScheduleRestApiPutTypeEnum;
    validatorConfigJson?: ValidatorConfigJson;
    validatorType?: ReportScheduleRestApiPutValidatorTypeEnum;
    workingTimeout?: number;
}
