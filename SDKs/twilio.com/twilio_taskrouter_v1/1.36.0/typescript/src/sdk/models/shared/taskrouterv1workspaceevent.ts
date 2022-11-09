import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskrouterV1WorkspaceEvent extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=actor_sid" })
  actorSid?: string;

  @Metadata({ data: "json, name=actor_type" })
  actorType?: string;

  @Metadata({ data: "json, name=actor_url" })
  actorUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=event_data" })
  eventData?: any;

  @Metadata({ data: "json, name=event_date" })
  eventDate?: Date;

  @Metadata({ data: "json, name=event_date_ms" })
  eventDateMs?: number;

  @Metadata({ data: "json, name=event_type" })
  eventType?: string;

  @Metadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=resource_url" })
  resourceUrl?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=source_ip_address" })
  sourceIpAddress?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=workspace_sid" })
  workspaceSid?: string;
}
