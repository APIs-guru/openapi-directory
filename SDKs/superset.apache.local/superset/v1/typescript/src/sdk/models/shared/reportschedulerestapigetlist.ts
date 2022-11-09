import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Meta34 } from "./meta34";
import { Meta33 } from "./meta33";
import { Meta36 } from "./meta36";
import { Meta35 } from "./meta35";


export class ReportScheduleRestApiGetList extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=changed_by" })
  changedBy?: Meta34;

  @Metadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @Metadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: Meta33;

  @Metadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @Metadata({ data: "json, name=creation_method" })
  creationMethod?: string;

  @Metadata({ data: "json, name=crontab" })
  crontab: string;

  @Metadata({ data: "json, name=crontab_humanized" })
  crontabHumanized?: any;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=last_eval_dttm" })
  lastEvalDttm?: Date;

  @Metadata({ data: "json, name=last_state" })
  lastState?: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=owners" })
  owners?: Meta36;

  @Metadata({ data: "json, name=recipients" })
  recipients: Meta35;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
