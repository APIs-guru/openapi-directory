import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceWorker extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_name" })
  activityName?: string;

  @SpeakeasyMetadata({ data: "json, name=activity_sid" })
  activitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: string;

  @SpeakeasyMetadata({ data: "json, name=available" })
  available?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_status_changed" })
  dateStatusChanged?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
