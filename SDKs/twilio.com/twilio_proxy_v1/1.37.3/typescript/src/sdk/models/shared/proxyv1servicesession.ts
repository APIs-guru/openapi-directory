import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SessionEnumModeEnum } from "./sessionenummodeenum";
import { SessionEnumStatusEnum } from "./sessionenumstatusenum";



export class ProxyV1ServiceSession extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=closed_reason" })
  closedReason?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_ended" })
  dateEnded?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_expiry" })
  dateExpiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_last_interaction" })
  dateLastInteraction?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_started" })
  dateStarted?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: SessionEnumModeEnum;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: SessionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
