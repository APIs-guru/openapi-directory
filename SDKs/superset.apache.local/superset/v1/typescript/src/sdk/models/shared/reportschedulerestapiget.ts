import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta40 } from "./meta40";
import { Meta41 } from "./meta41";
import { Meta37 } from "./meta37";
import { Meta39 } from "./meta39";
import { Meta38 } from "./meta38";



export class ReportScheduleRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=chart" })
  chart?: Meta40;

  @SpeakeasyMetadata({ data: "json, name=context_markdown" })
  contextMarkdown?: string;

  @SpeakeasyMetadata({ data: "json, name=creation_method" })
  creationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=crontab" })
  crontab: string;

  @SpeakeasyMetadata({ data: "json, name=dashboard" })
  dashboard?: Meta41;

  @SpeakeasyMetadata({ data: "json, name=database" })
  database?: Meta37;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=grace_period" })
  gracePeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_eval_dttm" })
  lastEvalDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_state" })
  lastState?: string;

  @SpeakeasyMetadata({ data: "json, name=last_value" })
  lastValue?: number;

  @SpeakeasyMetadata({ data: "json, name=last_value_row_json" })
  lastValueRowJson?: string;

  @SpeakeasyMetadata({ data: "json, name=log_retention" })
  logRetention?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta39;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: Meta38;

  @SpeakeasyMetadata({ data: "json, name=report_format" })
  reportFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=sql" })
  sql?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=validator_config_json" })
  validatorConfigJson?: string;

  @SpeakeasyMetadata({ data: "json, name=validator_type" })
  validatorType?: string;

  @SpeakeasyMetadata({ data: "json, name=working_timeout" })
  workingTimeout?: number;
}
