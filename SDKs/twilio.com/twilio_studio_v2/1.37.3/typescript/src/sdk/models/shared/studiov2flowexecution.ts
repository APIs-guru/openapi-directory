import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionEnumStatusEnum } from "./executionenumstatusenum";



export class StudioV2FlowExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_channel_address" })
  contactChannelAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ExecutionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
