import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudioV1FlowEngagementEngagementContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=context" })
  context?: any;

  @Metadata({ data: "json, name=engagement_sid" })
  engagementSid?: string;

  @Metadata({ data: "json, name=flow_sid" })
  flowSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
