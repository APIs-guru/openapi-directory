import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";


export class StudioV2FlowExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=contact_channel_address" })
  contactChannelAddress?: string;

  @Metadata({ data: "json, name=context" })
  context?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: ExecutionEnumStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
