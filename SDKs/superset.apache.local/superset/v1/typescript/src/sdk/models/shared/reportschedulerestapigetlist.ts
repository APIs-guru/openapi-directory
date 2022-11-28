import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Meta34 } from "./meta34";
import { Meta33 } from "./meta33";
import { Meta36 } from "./meta36";
import { Meta35 } from "./meta35";



export class ReportScheduleRestApiGetList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: Meta34;

  @SpeakeasyMetadata({ data: "json, name=changed_on" })
  changedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_on_delta_humanized" })
  changedOnDeltaHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=created_by" })
  createdBy?: Meta33;

  @SpeakeasyMetadata({ data: "json, name=created_on" })
  createdOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=creation_method" })
  creationMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=crontab" })
  crontab: string;

  @SpeakeasyMetadata({ data: "json, name=crontab_humanized" })
  crontabHumanized?: any;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_eval_dttm" })
  lastEvalDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_state" })
  lastState?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=owners" })
  owners?: Meta36;

  @SpeakeasyMetadata({ data: "json, name=recipients" })
  recipients: Meta35;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
