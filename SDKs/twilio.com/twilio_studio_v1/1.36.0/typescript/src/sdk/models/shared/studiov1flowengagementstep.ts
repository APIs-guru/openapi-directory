import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudioV1FlowEngagementStep extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=context" })
  context?: any;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=engagement_sid" })
  engagementSid?: string;

  @Metadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=transitioned_from" })
  transitionedFrom?: string;

  @Metadata({ data: "json, name=transitioned_to" })
  transitionedTo?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
