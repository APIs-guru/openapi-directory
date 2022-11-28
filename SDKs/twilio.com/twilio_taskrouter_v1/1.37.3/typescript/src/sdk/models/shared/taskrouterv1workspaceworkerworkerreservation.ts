import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkerReservationEnumStatusEnum } from "./workerreservationenumstatusenum";



export class TaskrouterV1WorkspaceWorkerWorkerReservation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=reservation_status" })
  reservationStatus?: WorkerReservationEnumStatusEnum;

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
