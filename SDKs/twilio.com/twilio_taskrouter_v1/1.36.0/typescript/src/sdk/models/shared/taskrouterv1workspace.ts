import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceEnumQueueOrderEnum } from "./workspaceenumqueueorderenum";


export class TaskrouterV1Workspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=default_activity_name" })
  defaultActivityName?: string;

  @Metadata({ data: "json, name=default_activity_sid" })
  defaultActivitySid?: string;

  @Metadata({ data: "json, name=event_callback_url" })
  eventCallbackUrl?: string;

  @Metadata({ data: "json, name=events_filter" })
  eventsFilter?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=multi_task_enabled" })
  multiTaskEnabled?: boolean;

  @Metadata({ data: "json, name=prioritize_queue_order" })
  prioritizeQueueOrder?: WorkspaceEnumQueueOrderEnum;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=timeout_activity_name" })
  timeoutActivityName?: string;

  @Metadata({ data: "json, name=timeout_activity_sid" })
  timeoutActivitySid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
