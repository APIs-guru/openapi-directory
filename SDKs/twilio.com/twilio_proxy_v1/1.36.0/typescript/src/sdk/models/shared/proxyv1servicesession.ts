import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SessionEnumModeEnum } from "./sessionenummodeenum";
import { SessionEnumStatusEnum } from "./sessionenumstatusenum";


export class ProxyV1ServiceSession extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=closed_reason" })
  closedReason?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_ended" })
  dateEnded?: Date;

  @Metadata({ data: "json, name=date_expiry" })
  dateExpiry?: Date;

  @Metadata({ data: "json, name=date_last_interaction" })
  dateLastInteraction?: Date;

  @Metadata({ data: "json, name=date_started" })
  dateStarted?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=mode" })
  mode?: SessionEnumModeEnum;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: SessionEnumStatusEnum;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
