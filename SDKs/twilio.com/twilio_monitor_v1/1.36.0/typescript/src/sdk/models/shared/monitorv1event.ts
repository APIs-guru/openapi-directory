import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MonitorV1Event extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=actor_sid" })
  actorSid?: string;

  @Metadata({ data: "json, name=actor_type" })
  actorType?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=event_data" })
  eventData?: any;

  @Metadata({ data: "json, name=event_date" })
  eventDate?: Date;

  @Metadata({ data: "json, name=event_type" })
  eventType?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=resource_sid" })
  resourceSid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=source" })
  source?: string;

  @Metadata({ data: "json, name=source_ip_address" })
  sourceIpAddress?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
