import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskReservationEnumStatusEnum } from "./taskreservationenumstatusenum";



export class TaskrouterV1WorkspaceTaskTaskReservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reservation_status" })
  reservationStatus?: TaskReservationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=worker_name" })
  workerName?: string;

  @SpeakeasyMetadata({ data: "json, name=worker_sid" })
  workerSid?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
