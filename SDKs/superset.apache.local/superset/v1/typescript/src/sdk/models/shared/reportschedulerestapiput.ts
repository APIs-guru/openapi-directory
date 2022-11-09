import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRecipient } from "./reportrecipient";
import { ValidatorConfigJson } from "./validatorconfigjson";

export enum ReportScheduleRestApiPutReportFormatEnum {
    Png = "PNG"
,    Csv = "CSV"
,    Text = "TEXT"
}

export enum ReportScheduleRestApiPutTypeEnum {
    Alert = "Alert"
,    Report = "Report"
}

export enum ReportScheduleRestApiPutValidatorTypeEnum {
    NotNull = "not null"
,    Operator = "operator"
}


export class ReportScheduleRestApiPut extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=chart" })
  chart?: number;

  @Metadata({ data: "json, name=context_markdown" })
  contextMarkdown?: string;

  @Metadata({ data: "json, name=creation_method" })
  creationMethod?: any;

  @Metadata({ data: "json, name=crontab" })
  crontab?: string;

  @Metadata({ data: "json, name=dashboard" })
  dashboard?: number;

  @Metadata({ data: "json, name=database" })
  database?: number;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=grace_period" })
  gracePeriod?: number;

  @Metadata({ data: "json, name=log_retention" })
  logRetention?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=recipients", elemType: shared.ReportRecipient })
  recipients?: ReportRecipient[];

  @Metadata({ data: "json, name=report_format" })
  reportFormat?: ReportScheduleRestApiPutReportFormatEnum;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReportScheduleRestApiPutTypeEnum;

  @Metadata({ data: "json, name=validator_config_json" })
  validatorConfigJson?: ValidatorConfigJson;

  @Metadata({ data: "json, name=validator_type" })
  validatorType?: ReportScheduleRestApiPutValidatorTypeEnum;

  @Metadata({ data: "json, name=working_timeout" })
  workingTimeout?: number;
}
