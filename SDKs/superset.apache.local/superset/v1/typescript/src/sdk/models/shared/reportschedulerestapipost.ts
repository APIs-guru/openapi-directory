import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRecipient } from "./reportrecipient";
import { ValidatorConfigJson } from "./validatorconfigjson";

export enum ReportScheduleRestApiPostReportFormatEnum {
    Png = "PNG"
,    Csv = "CSV"
,    Text = "TEXT"
}

export enum ReportScheduleRestApiPostTypeEnum {
    Alert = "Alert"
,    Report = "Report"
}

export enum ReportScheduleRestApiPostValidatorTypeEnum {
    NotNull = "not null"
,    Operator = "operator"
}


export class ReportScheduleRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=chart" })
  chart?: number;

  @Metadata({ data: "json, name=context_markdown" })
  contextMarkdown?: string;

  @Metadata({ data: "json, name=creation_method" })
  creationMethod?: any;

  @Metadata({ data: "json, name=crontab" })
  crontab: string;

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
  name: string;

  @Metadata({ data: "json, name=owners" })
  owners?: number[];

  @Metadata({ data: "json, name=recipients", elemType: shared.ReportRecipient })
  recipients?: ReportRecipient[];

  @Metadata({ data: "json, name=report_format" })
  reportFormat?: ReportScheduleRestApiPostReportFormatEnum;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type: ReportScheduleRestApiPostTypeEnum;

  @Metadata({ data: "json, name=validator_config_json" })
  validatorConfigJson?: ValidatorConfigJson;

  @Metadata({ data: "json, name=validator_type" })
  validatorType?: ReportScheduleRestApiPostValidatorTypeEnum;

  @Metadata({ data: "json, name=working_timeout" })
  workingTimeout?: number;
}
