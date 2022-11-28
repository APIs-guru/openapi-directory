import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudioV1FlowEngagementStep extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: any;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=engagement_sid" })
  engagementSid?: string;

  @SpeakeasyMetadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=transitioned_from" })
  transitionedFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=transitioned_to" })
  transitionedTo?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
