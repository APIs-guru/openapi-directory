import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TaskQueueEnumTaskOrderEnum } from "./taskqueueenumtaskorderenum";


export class TaskrouterV1WorkspaceTaskQueue extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=assignment_activity_name" })
  assignmentActivityName?: string;

  @Metadata({ data: "json, name=assignment_activity_sid" })
  assignmentActivitySid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=max_reserved_workers" })
  maxReservedWorkers?: number;

  @Metadata({ data: "json, name=reservation_activity_name" })
  reservationActivityName?: string;

  @Metadata({ data: "json, name=reservation_activity_sid" })
  reservationActivitySid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=target_workers" })
  targetWorkers?: string;

  @Metadata({ data: "json, name=task_order" })
  taskOrder?: TaskQueueEnumTaskOrderEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
