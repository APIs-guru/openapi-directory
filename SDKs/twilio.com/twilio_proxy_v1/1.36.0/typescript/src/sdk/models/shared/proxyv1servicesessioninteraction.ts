import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InteractionEnumResourceStatusEnum } from "./interactionenumresourcestatusenum";
import { InteractionEnumResourceStatusEnum } from "./interactionenumresourcestatusenum";
import { InteractionEnumTypeEnum } from "./interactionenumtypeenum";


export class ProxyV1ServiceSessionInteraction extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=inbound_participant_sid" })
  inboundParticipantSid?: string;

  @Metadata({ data: "json, name=inbound_resource_sid" })
  inboundResourceSid?: string;

  @Metadata({ data: "json, name=inbound_resource_status" })
  inboundResourceStatus?: InteractionEnumResourceStatusEnum;

  @Metadata({ data: "json, name=inbound_resource_type" })
  inboundResourceType?: string;

  @Metadata({ data: "json, name=inbound_resource_url" })
  inboundResourceUrl?: string;

  @Metadata({ data: "json, name=outbound_participant_sid" })
  outboundParticipantSid?: string;

  @Metadata({ data: "json, name=outbound_resource_sid" })
  outboundResourceSid?: string;

  @Metadata({ data: "json, name=outbound_resource_status" })
  outboundResourceStatus?: InteractionEnumResourceStatusEnum;

  @Metadata({ data: "json, name=outbound_resource_type" })
  outboundResourceType?: string;

  @Metadata({ data: "json, name=outbound_resource_url" })
  outboundResourceUrl?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=session_sid" })
  sessionSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=type" })
  type?: InteractionEnumTypeEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
