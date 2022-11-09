import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta40 } from "./meta40";
import { Meta41 } from "./meta41";
import { Meta37 } from "./meta37";
import { Meta39 } from "./meta39";
import { Meta38 } from "./meta38";


export class ReportScheduleRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=chart" })
  chart?: Meta40;

  @Metadata({ data: "json, name=context_markdown" })
  contextMarkdown?: string;

  @Metadata({ data: "json, name=creation_method" })
  creationMethod?: string;

  @Metadata({ data: "json, name=crontab" })
  crontab: string;

  @Metadata({ data: "json, name=dashboard" })
  dashboard?: Meta41;

  @Metadata({ data: "json, name=database" })
  database?: Meta37;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=grace_period" })
  gracePeriod?: number;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_eval_dttm" })
  lastEvalDttm?: Date;

  @Metadata({ data: "json, name=last_state" })
  lastState?: string;

  @Metadata({ data: "json, name=last_value" })
  lastValue?: number;

  @Metadata({ data: "json, name=last_value_row_json" })
  lastValueRowJson?: string;

  @Metadata({ data: "json, name=log_retention" })
  logRetention?: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta39;

  @Metadata({ data: "json, name=recipients" })
  recipients: Meta38;

  @Metadata({ data: "json, name=report_format" })
  reportFormat?: string;

  @Metadata({ data: "json, name=sql" })
  sql?: string;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=validator_config_json" })
  validatorConfigJson?: string;

  @Metadata({ data: "json, name=validator_type" })
  validatorType?: string;

  @Metadata({ data: "json, name=working_timeout" })
  workingTimeout?: number;
}
