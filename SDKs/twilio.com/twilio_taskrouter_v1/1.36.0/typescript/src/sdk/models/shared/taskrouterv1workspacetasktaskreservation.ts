import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskReservationEnumStatusEnum } from "./taskreservationenumstatusenum";


export class TaskrouterV1WorkspaceTaskTaskReservation extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=reservation_status" })
  reservationStatus?: TaskReservationEnumStatusEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=task_sid" })
  taskSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=worker_name" })
  workerName?: string;

  @Metadata({ data: "json, name=worker_sid" })
  workerSid?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
