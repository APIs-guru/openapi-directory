import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceEnumQueueOrderEnum } from "./workspaceenumqueueorderenum";



export class TaskrouterV1Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_activity_name" })
  defaultActivityName?: string;

  @SpeakeasyMetadata({ data: "json, name=default_activity_sid" })
  defaultActivitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=event_callback_url" })
  eventCallbackUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=events_filter" })
  eventsFilter?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=multi_task_enabled" })
  multiTaskEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prioritize_queue_order" })
  prioritizeQueueOrder?: WorkspaceEnumQueueOrderEnum;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout_activity_name" })
  timeoutActivityName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout_activity_sid" })
  timeoutActivitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
