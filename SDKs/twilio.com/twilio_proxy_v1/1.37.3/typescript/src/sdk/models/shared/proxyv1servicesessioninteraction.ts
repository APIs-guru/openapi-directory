import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InteractionEnumResourceStatusEnum } from "./interactionenumresourcestatusenum";
import { InteractionEnumTypeEnum } from "./interactionenumtypeenum";



export class ProxyV1ServiceSessionInteraction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=inbound_participant_sid" })
  inboundParticipantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_resource_sid" })
  inboundResourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_resource_status" })
  inboundResourceStatus?: InteractionEnumResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=inbound_resource_type" })
  inboundResourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_resource_url" })
  inboundResourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_participant_sid" })
  outboundParticipantSid?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_resource_sid" })
  outboundResourceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_resource_status" })
  outboundResourceStatus?: InteractionEnumResourceStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=outbound_resource_type" })
  outboundResourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_resource_url" })
  outboundResourceUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=session_sid" })
  sessionSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: InteractionEnumTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
