import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRecipient } from "./reportrecipient";
import { ValidatorConfigJson } from "./validatorconfigjson";


export enum ReportScheduleRestApiPutReportFormatEnum {
    Png = "PNG",
    Csv = "CSV",
    Text = "TEXT"
}

export enum ReportScheduleRestApiPutTypeEnum {
    Alert = "Alert",
    Report = "Report"
}

export enum ReportScheduleRestApiPutValidatorTypeEnum {
    NotNull = "not null",
    Operator = "operator"
}


export class ReportScheduleRestApiPut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chart" })
  chart?: number;

  @SpeakeasyMetadata({ data: "json, name=context_markdown" })
  contextMarkdown?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_method" })
  creationMethod?: any;

  @SpeakeasyMetadata({ data: "json, name=crontab" })
  crontab?: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard" })
  dashboard?: number;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: number;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=grace_period" })
  gracePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=log_retention" })
  logRetention?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: number[];

  @SpeakeasyMetadata({ data: "json, name=recipients", elemType: ReportRecipient })
  recipients?: ReportRecipient[];

  @SpeakeasyMetadata({ data: "json, name=report_format" })
  reportFormat?: ReportScheduleRestApiPutReportFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportScheduleRestApiPutTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=validator_config_json" })
  validatorConfigJson?: ValidatorConfigJson;

  @SpeakeasyMetadata({ data: "json, name=validator_type" })
  validatorType?: ReportScheduleRestApiPutValidatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=working_timeout" })
  workingTimeout?: number;
}
