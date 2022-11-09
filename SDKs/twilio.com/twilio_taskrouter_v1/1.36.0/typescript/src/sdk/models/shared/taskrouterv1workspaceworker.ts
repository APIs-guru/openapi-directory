import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceWorker extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=activity_name" })
  activityName?: string;

  @Metadata({ data: "json, name=activity_sid" })
  activitySid?: string;

  @Metadata({ data: "json, name=attributes" })
  attributes?: string;

  @Metadata({ data: "json, name=available" })
  available?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_status_changed" })
  dateStatusChanged?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
