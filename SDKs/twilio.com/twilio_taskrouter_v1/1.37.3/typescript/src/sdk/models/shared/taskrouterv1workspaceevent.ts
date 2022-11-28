import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskrouterV1WorkspaceEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=actor_sid" })
  actorSid?: string;

  @SpeakeasyMetadata({ data: "json, name=actor_type" })
  actorType?: string;

  @SpeakeasyMetadata({ data: "json, name=actor_url" })
  actorUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=event_data" })
  eventData?: any;

  @SpeakeasyMetadata({ data: "json, name=event_date" })
  eventDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=event_date_ms" })
  eventDateMs?: number;

  @SpeakeasyMetadata({ data: "json, name=event_type" })
  eventType?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_url" })
  resourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=source_ip_address" })
  sourceIpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
