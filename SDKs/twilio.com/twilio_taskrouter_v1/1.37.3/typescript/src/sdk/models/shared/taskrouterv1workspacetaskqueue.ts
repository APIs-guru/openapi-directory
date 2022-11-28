import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TaskQueueEnumTaskOrderEnum } from "./taskqueueenumtaskorderenum";



export class TaskrouterV1WorkspaceTaskQueue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=assignment_activity_name" })
  assignmentActivityName?: string;

  @SpeakeasyMetadata({ data: "json, name=assignment_activity_sid" })
  assignmentActivitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=max_reserved_workers" })
  maxReservedWorkers?: number;

  @SpeakeasyMetadata({ data: "json, name=reservation_activity_name" })
  reservationActivityName?: string;

  @SpeakeasyMetadata({ data: "json, name=reservation_activity_sid" })
  reservationActivitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=target_workers" })
  targetWorkers?: string;

  @SpeakeasyMetadata({ data: "json, name=task_order" })
  taskOrder?: TaskQueueEnumTaskOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
